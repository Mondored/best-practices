/* const person: {
    name: string;
    age: number;
} = { */
class Department {
    //nameOfDepartment: string;
    private employee: string[] = [];

    constructor(private readonly id: string, public nameOfDepartment: string) {
        //this.nameOfDepartment = n;        
    }

    describe(this: Department) {
        console.log('Department: '+ this.nameOfDepartment);
    }

    addEmployee(employee: string) {
        this.employee.push(employee);
    }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
  }
}

const accounting = new ITDepartment('id1', ['Max']);

const person = {
    name: 'Max',
    age: 20,
    hobbies: ['Sports', 'Cookies']
};

console.log(person.age);