import {ObjectSchema, Realm} from 'realm';
import Person from './Person';

export default class TaskData extends Realm.Object<TaskData> {
  _id!: number;
  name!: string;
  priority?: number;
  progressMinutes?: number;
  assignee?: Person;
  age?: number;
  static schema: ObjectSchema = {
    name: 'TaskData',
    properties: {
      _id: 'int',
      name: 'string',
      priority: 'int?',
      progressMinutes: 'int',
      assignee: 'Person?',
    },
    primaryKey: '_id',
  };
}
