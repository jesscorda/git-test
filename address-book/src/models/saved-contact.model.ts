import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class SavedContact extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'date',
    required: true,
  })
  birthdate: string;

  @property({
    type: 'number',
    required: true,
  })
  phone: number;

  @property({
    type: 'object',
    required: true,
  })
  address: object;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SavedContact>) {
    super(data);
  }
}

export interface SavedContactRelations {
  // describe navigational properties here
}

export type SavedContactWithRelations = SavedContact & SavedContactRelations;
