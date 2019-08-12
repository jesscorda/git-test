import {DefaultCrudRepository} from '@loopback/repository';
import {SavedPlace, SavedPlaceRelations} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SavedPlaceRepository extends DefaultCrudRepository<
  SavedPlace,
  typeof SavedPlace.prototype.id,
  SavedPlaceRelations
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDbDataSource,
  ) {
    super(SavedPlace, dataSource);
  }
}
