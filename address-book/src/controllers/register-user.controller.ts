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
} from '@loopback/rest';
import {RegisteredUser} from '../models';
import {RegisteredUserRepository} from '../repositories';

export class RegisterUserController {
  constructor(
    @repository(RegisteredUserRepository)
    public registeredUserRepository : RegisteredUserRepository,
  ) {}

  @post('/register', {
    responses: {
      '200': {
        description: 'RegisteredUser model instance',
        content: {'application/json': {schema: { "x-ts-type": RegisteredUser }}},
      },
    },
  })
  async create(
    @requestBody()
    registeredUser: RegisteredUser,
  ): Promise<RegisteredUser> {
    return await this.registeredUserRepository.create(registeredUser);
  }

  @get('/register/count', {
    responses: {
      '200': {
        description: 'RegisteredUser model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(RegisteredUser)) where?: Where<RegisteredUser>,
  ): Promise<Count> {
    return this.registeredUserRepository.count(where);
  }

  @get('/register', {
    responses: {
      '200': {
        description: 'Array of RegisteredUser model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(RegisteredUser)},
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
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegisteredUser, {partial: true}),
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
        content: {'application/json': {schema: getModelSchemaRef(RegisteredUser)}},
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
          schema: getModelSchemaRef(RegisteredUser, {partial: true}),
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
