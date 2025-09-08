//lesson 20 :

let age: number = 25;
if(age > 18 ) {
    console.log("da du tuoi");
} else {
    console.log("ch du tuoi");
}

//lesson 27 
function sum1(a: any,b: any) {
    return a+b;
}

console.log(sum1('hong',9));

// anonymous function 
const sum2 = (a: any, b:any) => {
    return a+b;
}

console.log("check: ",sum2(6,9))
// lesson 28 

const add = (a: number, b: number) =>  {
    // return a + b;
    return 'abc'
}

console.log(add(2,3));

// lesson 29: optional parameters

const sum5 = (x: number, y: number, z?: number) => {
    if(z) {
    return x + y + z;

    }
    return x + y;
}

console.log("check: ", sum5(1,3)); // NaN: not a number; null; undef

 // Default Parameters lesson 31

let sum7= (x: number, y: number, z = 0 ) => { // z là optional param
    console.log(z);
    if(z){
        return x + y + z;
    }
    return x + y
}

console.log("check sum7: ", sum7(1,3), sum7(1,3,9)); 

// Rest Parameters : chi co the dung 1 cai va nam cuoi cung

function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(getTotal());
console.log(getTotal(10, 20));
console.log(getTotal(10, 20, 30));


function multiply(n: number, ...m: number[]) {
    return m.map((x) => n*x);
}

const a3 = multiply(10,20,30,40);

function Greet (greeting: string, ...names: string[] ) {
    return greeting +""+ names.join(",") + "!";
}

console.log(multiply(10,20,20,30,40));
console.log(Greet("xin chao moi nguoi", 'hong', 'dinh','chit'))

// lesson 32 
//Function Overloading 

function add111(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("Both parameters must be numbers or both strings");
}

// function addNew (a: number, b: number): number;

function addNew (a: string, b: string): string;

function addNew (a: string, b: string) {
    return a + b;
}

// console.log(addNew(6,9), addNew("nguyen van", "hong"))
// lesson 33
//classes

class Person{
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

}

let hong = new Person("23", "hong" , "nguyen");

console.log(hong);
console.log(hong.getFullName());

// Access Modifiers 

class Employee {
    public empCode!: string;
    private empName!: string;

    constructor(empCode: string, empName: string) {
        this.empCode = empCode;
        this.empName = empName;
    }
    //getter setter
}

let emp = new Employee('a','v');
emp.empCode="123";
// emp.empName = 'hong';

console.log(emp);
