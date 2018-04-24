// http://amanvirk.me/singleton-classes-in-es6/
let instance = null;
import { DateTime } from 'luxon';

class SingletonModuleScopedInstance {
  constructor() {
    if (!instance) {
      instance = this;
    }
    var timeList = []
    for (var i = 0; i<1440; i++) {
      timeList.push(DateTime.local(1962, 5, 10, 0, 0).plus({minutes: 5*i}).toFormat('HH:mm'))
    }
    this._type = timeList;
    this.time = new Date();

    return instance;
  }

  singletonMethod() {
    return 'singletonMethod';
  }

  static staticMethod() {
    return 'staticMethod';
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }
}

export default SingletonModuleScopedInstance;
