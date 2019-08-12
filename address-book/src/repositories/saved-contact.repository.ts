import {DefaultCrudRepository} from '@loopback/repository';
import {SavedContact, SavedContactRelations} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SavedContactRepository extends DefaultCrudRepository<
  SavedContact,
  typeof SavedContact.prototype.id,
  SavedContactRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(SavedContact, dataSource);
  }
}
