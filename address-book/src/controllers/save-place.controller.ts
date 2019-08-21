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
import {SavedPlace} from '../models';
import {SavedPlaceRepository} from '../repositories';
import { validateRequestBody, ValidationError } from "../utils/validation.utils";
import { verifyJWT } from "../utils/generateVerifyToken";

export class SavePlaceController {
  constructor(
    @inject(RestBindings.Http.REQUEST) public request: Request,
    @repository(SavedPlaceRepository)
    public savedPlaceRepository : SavedPlaceRepository,
  ) {}

  @post('/saved-places', {
    responses: {
      '200': {
        description: 'SavedPlace model instance',
        content: {'application/json': {schema: getModelSchemaRef(SavedPlace)}},
      },
    },
  })
  async create(
    @requestBody()
    savedPlace: SavedPlace,
  ): Promise<SavedPlace> {
    try {
      if(this.request.headers.authorization == undefined){
        throw new HttpErrors.Unauthorized();
      }
      const token = this.request.headers.authorization.split(" ")[1];
      await verifyJWT(token);
      validateRequestBody(savedPlace);
      return this.savedPlaceRepository.create(savedPlace);
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new HttpErrors.UnprocessableEntity(error.message);
      }
      else {
        throw error;
      }
    }
  }

  @get('/saved-places/count', {
    responses: {
      '200': {
        description: 'SavedPlace model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(SavedPlace)) where?: Where<SavedPlace>,
  ): Promise<Count> {
    return this.savedPlaceRepository.count(where);
  }

  @get('/saved-places', {
    responses: {
      '200': {
        description: 'Array of SavedPlace model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(SavedPlace)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(SavedPlace)) filter?: Filter<SavedPlace>,
  ): Promise<SavedPlace[]> {
    try {
      if(this.request.headers.authorization == undefined){
        throw new HttpErrors.Unauthorized();
      }
      const token = this.request.headers.authorization.split(" ")[1];
      await verifyJWT(token);
      return this.savedPlaceRepository.find(filter);
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new HttpErrors.UnprocessableEntity(error.message);
      }
      else {
        throw error;
      }
    }
  }

  @patch('/saved-places', {
    responses: {
      '200': {
        description: 'SavedPlace PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SavedPlace, {partial: true}),
        },
      },
    })
    savedPlace: SavedPlace,
    @param.query.object('where', getWhereSchemaFor(SavedPlace)) where?: Where<SavedPlace>,
  ): Promise<Count> {
    return this.savedPlaceRepository.updateAll(savedPlace, where);
  }

  @get('/saved-places/{id}', {
    responses: {
      '200': {
        description: 'SavedPlace model instance',
        content: {'application/json': {schema: getModelSchemaRef(SavedPlace)}},
      },
    },
  })
  async findById(@param.path.number('id') id: string): Promise<SavedPlace> {
    return this.savedPlaceRepository.findById(id);
  }

  @patch('/saved-places/{id}', {
    responses: {
      '204': {
        description: 'SavedPlace PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SavedPlace, {partial: true}),
        },
      },
    })
    savedPlace: SavedPlace,
  ): Promise<void> {
    await this.savedPlaceRepository.updateById(id, savedPlace);
  }

  @put('/saved-places/{id}', {
    responses: {
      '204': {
        description: 'SavedPlace PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: string,
    @requestBody() savedPlace: SavedPlace,
  ): Promise<void> {
    await this.savedPlaceRepository.replaceById(id, savedPlace);
  }

  @del('/saved-places/{id}', {
    responses: {
      '204': {
        description: 'SavedPlace DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: string): Promise<void> {
    await this.savedPlaceRepository.deleteById(id);
  }
}
