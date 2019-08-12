import {DefaultCrudRepository} from '@loopback/repository';
import {RegisteredUser, RegisteredUserRelations} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RegisteredUserRepository extends DefaultCrudRepository<
  RegisteredUser,
  typeof RegisteredUser.prototype.id,
  RegisteredUserRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(RegisteredUser, dataSource);
  }
}
