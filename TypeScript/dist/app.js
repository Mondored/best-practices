"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* const person: {
    name: string;
    age: number;
} = { */
var Department = /** @class */ (function () {
    function Department(id, nameOfDepartment) {
        this.id = id;
        this.nameOfDepartment = nameOfDepartment;
        //nameOfDepartment: string;
        this.employee = [];
        //this.nameOfDepartment = n;        
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.nameOfDepartment);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employee.push(employee);
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var accounting = new ITDepartment('id1', ['Max']);
var person = {
    name: 'Max',
    age: 20,
    hobbies: ['Sports', 'Cookies']
};
console.log(person.age);
