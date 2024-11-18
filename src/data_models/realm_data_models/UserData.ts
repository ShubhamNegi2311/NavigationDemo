import {Realm} from 'realm';

export default class UserData extends Realm.Object<UserData> {
  name!: string;
  role!: string;
  _id!: Realm.BSON.ObjectID;

  static generate(name: string, role: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      name,
      role,
    };
  }

  static schema = {
    name: 'UserData',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      role: 'string',
    },
  };
}
