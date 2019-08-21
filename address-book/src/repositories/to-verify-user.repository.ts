import {DefaultCrudRepository} from '@loopback/repository';
import {ToVerifyUser, ToVerifyUserRelations} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ToVerifyUserRepository extends DefaultCrudRepository<
  ToVerifyUser,
  typeof ToVerifyUser.prototype.id,
  ToVerifyUserRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(ToVerifyUser, dataSource);
  }
}
