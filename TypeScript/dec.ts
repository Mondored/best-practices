function Logger(contructor: Function) {
    console.log('Logging...');
    console.log(contructor);
}

@Logger
class Person {
  name= 'Max';

  constructor() {
    console.log('Creating the object');
  }
}

const pers = new Person();

console.log(pers);