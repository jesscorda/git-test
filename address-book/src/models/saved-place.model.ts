import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class SavedPlace extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id: string;

  @property({
    type: 'object',
    required: true,
  })
  address: object;

  @property({
    type: 'string',
  })
  typeOfPlace: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SavedPlace>) {
    super(data);
  }
}

export interface SavedPlaceRelations {
  // describe navigational properties here
}

export type SavedPlaceWithRelations = SavedPlace & SavedPlaceRelations;
