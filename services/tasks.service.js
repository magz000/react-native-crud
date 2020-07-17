import Realm from 'realm';
import { ToastAndroid } from 'react-native'

class Task { }

Task.schema = {
  name: 'Task',
  primaryKey: 'name',
  properties: {
    name: 'string',
    isDone: { type: 'int', default: 0 }
  },
};

let realm = new Realm({ schema: [Task] });


export function addTask(data) {
  try {
    realm.write(() => {
      realm.create('Task', {
        name: data,
      });

    });
    
    return true
  }catch(e) {
    return false
  }
  
}

export function getTasks() {
  return realm.objects('Task').filtered('isDone = 0')
}

export function getTasksDone() {
  return realm.objects('Task').filtered('isDone = 1')
}

export function markTaskAsDone(name) {
  let task = realm.objectForPrimaryKey("Task", name)
  realm.write(() => {
    task.isDone = 1
  })
}

export function clearTasks() {
  realm.write(() => {
    realm.delete(realm.objects('Task'))
  })
}
