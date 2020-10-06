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
