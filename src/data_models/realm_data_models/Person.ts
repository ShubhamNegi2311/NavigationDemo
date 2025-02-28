import {ObjectSchema, Realm} from 'realm';

export default class Person extends Realm.Object<Person> {
  name!: string;
  age?: number;
  birthday?: Date;
  static schema: ObjectSchema = {
    name: 'Person',
    properties: {
      name: 'string',
      age: {
        type: 'int',
        optional: true,
      },
      // You can use a simplified syntax instead. For
      // more complicated types, use the object syntax.
      birthday: 'date?',
    },
  };
}
