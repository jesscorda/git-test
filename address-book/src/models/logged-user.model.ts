import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class LoggedUser extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  sendTimeStamp: string;

  @property({
    type: 'string',
    required: true,
  })
  userName: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<LoggedUser>) {
    super(data);
  }
}

export interface LoogedUserRelations {
  // describe navigational properties here
}

export type LoogedUserWithRelations = LoggedUser & LoogedUserRelations;
