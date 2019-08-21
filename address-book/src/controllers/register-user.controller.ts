import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
  HttpErrors,
  RestBindings,
  Request
} from '@loopback/rest';
import {inject} from '@loopback/context';
import { RegisteredUser , LoggedUser} from '../models';
import { RegisteredUserRepository, ToVerifyUserRepository } from '../repositories';
import { validateRequestBody, ValidationError } from "../utils/validation.utils";
import { sendMail } from "../utils/sendMail.util";
import { verifyLinkToken, checkLinkExpiry } from '../utils/linkToken.util';
import { checkPassword } from "../utils/checkCredentials.util";
import { generateJWT } from "../utils/generateVerifyToken";

export class RegisterUserController {
  constructor(
    @inject(RestBindings.Http.REQUEST) public request: Request,
    @repository(RegisteredUserRepository)
    public registeredUserRepository: RegisteredUserRepository,
    @repository(ToVerifyUserRepository)
    public toVerifyUserRepository: ToVerifyUserRepository
  ) { }

  @post('/register', {
    responses: {
      '200': {
        description: 'RegisteredUser model instance',
        content: { 'application/json': { schema: { "x-ts-type": RegisteredUser } } },
      },
    },
  })
  async create(
    @requestBody()
    registeredUser: RegisteredUser,
  ): Promise<RegisteredUser> {
    try {
      validateRequestBody(registeredUser);
      const userEmailExists = await this.registeredUserRepository.find({ where: { email: registeredUser.email } });
      const toVerifyUserEmailExists = await this.toVerifyUserRepository.find({ where: { email: registeredUser.email } });
      if (userEmailExists.length !== 0) {
        throw new HttpErrors.UnprocessableEntity("Email aldready exists. Register with another one");
      }else if(toVerifyUserEmailExists.length !== 0){
        throw new HttpErrors.UnprocessableEntity("Please confirm your email address");
      }
      await sendMail(registeredUser.email, registeredUser.firstName);
      return await this.toVerifyUserRepository.create(registeredUser);
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new HttpErrors.UnprocessableEntity(error.message);
      }
      else {
        throw error;
      }
    }
  }

  @post('/test', {
    responses: {
      '200': {
        description: 'RegisteredUser model instance',
        content: { 'application/json': { schema: { "x-ts-type": RegisteredUser } } },
      },
    },
  })
  async test(
    @requestBody()
    registeredUser: RegisteredUser,
  ): Promise<RegisteredUser> {
    try {
      console.log(this.request.headers.authorization);
      return await this.toVerifyUserRepository.create(registeredUser);
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new HttpErrors.UnprocessableEntity(error.message);
      }
      else {
        throw error;
      }
    }
  }

  @get('/verify/{id}', {
    responses: {
      '200': {
        description: 'RegisteredUser model instance',
        content: { 'application/json': { schema: { "x-ts-type": RegisteredUser } } },
      },
    },
  })
  async verifyToken(@param.path.string('id') id: string
  ): Promise<RegisteredUser> {
    try {
      const decryptedstring = verifyLinkToken(id);
      const userEmailExists = await this.toVerifyUserRepository.find({ where: { email: decryptedstring } });
      if (userEmailExists.length == 0) {
        throw new HttpErrors.UnprocessableEntity("Account has been confirmed. Please login");
      }
      const timeElaspsed = checkLinkExpiry(userEmailExists[0].sendTimeStamp);      
      if(!timeElaspsed){
        throw new HttpErrors.UnprocessableEntity("Link token expired");
      }
      await this.toVerifyUserRepository.deleteById(userEmailExists[0].id);
      await delete userEmailExists[0].id;
      return await this.registeredUserRepository.create(userEmailExists[0]);
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new HttpErrors.UnprocessableEntity(error.message);
      }
      else {
        throw error;
      }
    }
  }

  @post('/login', {
    responses: {
      '200': {
        description: 'RegisteredUser model instance',
        content: { 'application/json': { schema: { "x-ts-type": RegisteredUser } } },
      },
    },
  })
  async login(
    @requestBody()
    loggedUser: LoggedUser,
  ): Promise<{token : string, userName : string}> {
    try {
      validateRequestBody(loggedUser);
      const userDetails = await this.registeredUserRepository.find({ where: { email: loggedUser.userName } });
      console.log(userDetails)
      if(userDetails.length == 0){
        throw new HttpErrors.UnprocessableEntity("Not a registered user");
      }else{
        checkPassword(loggedUser, userDetails[0]);
      }
      const token = await generateJWT(loggedUser);
      const response = {
        token : token,
        userName : loggedUser.userName
      }
      return response;    
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new HttpErrors.UnprocessableEntity(error.message);
      }
      else {
        throw error;
      }
    }
  }

  @get('/register/count', {
    responses: {
      '200': {
        description: 'RegisteredUser model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(RegisteredUser)) where?: Where<RegisteredUser>,
  ): Promise<Count> {
    await this.toVerifyUserRepository.deleteAll();
    return this.registeredUserRepository.count(where);
  }

  @get('/register', {
    responses: {
      '200': {
        description: 'Array of RegisteredUser model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: getModelSchemaRef(RegisteredUser) },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(RegisteredUser)) filter?: Filter<RegisteredUser>,
  ): Promise<RegisteredUser[]> {
    return this.registeredUserRepository.find(filter);
  }

  @patch('/register', {
    responses: {
      '200': {
        description: 'RegisteredUser PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegisteredUser, { partial: true }),
        },
      },
    })
    registeredUser: RegisteredUser,
    @param.query.object('where', getWhereSchemaFor(RegisteredUser)) where?: Where<RegisteredUser>,
  ): Promise<Count> {
    return this.registeredUserRepository.updateAll(registeredUser, where);
  }

  @get('/register/{id}', {
    responses: {
      '200': {
        description: 'RegisteredUser model instance',
        content: { 'application/json': { schema: getModelSchemaRef(RegisteredUser) } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<RegisteredUser> {
    return this.registeredUserRepository.findById(id);
  }

  @patch('/register/{id}', {
    responses: {
      '204': {
        description: 'RegisteredUser PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegisteredUser, { partial: true }),
        },
      },
    })
    registeredUser: RegisteredUser,
  ): Promise<void> {
    await this.registeredUserRepository.updateById(id, registeredUser);
  }

  @put('/register/{id}', {
    responses: {
      '204': {
        description: 'RegisteredUser PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() registeredUser: RegisteredUser,
  ): Promise<void> {
    await this.registeredUserRepository.replaceById(id, registeredUser);
  }

  @del('/register/{id}', {
    responses: {
      '204': {
        description: 'RegisteredUser DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.registeredUserRepository.deleteById(id);
  }
}
