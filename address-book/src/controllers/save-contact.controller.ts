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
import {SavedContact} from '../models';
import {SavedContactRepository} from '../repositories';

export class SaveContactController {
  constructor(
    @repository(SavedContactRepository)
    public savedContactRepository : SavedContactRepository,
  ) {}

  @post('/saved-contacts', {
    responses: {
      '200': {
        description: 'SavedContact model instance',
        content: {'application/json': {schema: getModelSchemaRef(SavedContact)}},
      },
    },
  })
  async create(
    @requestBody()
    savedContact: SavedContact,
  ): Promise<SavedContact> {
    return this.savedContactRepository.create(savedContact);
  }

  @get('/saved-contacts/count', {
    responses: {
      '200': {
        description: 'SavedContact model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(SavedContact)) where?: Where<SavedContact>,
  ): Promise<Count> {
    return this.savedContactRepository.count(where);
  }

  @get('/saved-contacts', {
    responses: {
      '200': {
        description: 'Array of SavedContact model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(SavedContact)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(SavedContact)) filter?: Filter<SavedContact>,
  ): Promise<SavedContact[]> {
    return this.savedContactRepository.find(filter);
  }

  @patch('/saved-contacts', {
    responses: {
      '200': {
        description: 'SavedContact PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SavedContact, {partial: true}),
        },
      },
    })
    savedContact: SavedContact,
    @param.query.object('where', getWhereSchemaFor(SavedContact)) where?: Where<SavedContact>,
  ): Promise<Count> {
    return this.savedContactRepository.updateAll(savedContact, where);
  }

  @get('/saved-contacts/{id}', {
    responses: {
      '200': {
        description: 'SavedContact model instance',
        content: {'application/json': {schema: getModelSchemaRef(SavedContact)}},
      },
    },
  })
  async findById(@param.path.number('id') id: string): Promise<SavedContact> {
    return this.savedContactRepository.findById(id);
  }

  @patch('/saved-contacts/{id}', {
    responses: {
      '204': {
        description: 'SavedContact PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SavedContact, {partial: true}),
        },
      },
    })
    savedContact: SavedContact,
  ): Promise<void> {
    await this.savedContactRepository.updateById(id, savedContact);
  }

  @put('/saved-contacts/{id}', {
    responses: {
      '204': {
        description: 'SavedContact PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: string,
    @requestBody() savedContact: SavedContact,
  ): Promise<void> {
    await this.savedContactRepository.replaceById(id, savedContact);
  }

  @del('/saved-contacts/{id}', {
    responses: {
      '204': {
        description: 'SavedContact DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: string): Promise<void> {
    await this.savedContactRepository.deleteById(id);
  }
}
