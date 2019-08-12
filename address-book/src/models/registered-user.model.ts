import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class RegisteredUser extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

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
  password: string;

  @property({
    type: 'object',
    required: true,
  })
  address: object;

  @property({
    type: 'number',
    required: true,
  })
  number: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RegisteredUser>) {
    super(data);
  }
}

export interface RegisteredUserRelations {
  // describe navigational properties here
}

export type RegisteredUserWithRelations = RegisteredUser & RegisteredUserRelations;
