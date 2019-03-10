console.log("hi there");

//String
const test = "test";
//test = 12; //error

//Number
const test2 = 1;
//test2 = "12"; //error

//Boolean
const test3 = false;
//test3 = 1; //error

//any
let test4; //default type is "any" if not assigned any value to a variable
test4 = 12; //no error
test4 = "12"; //no error
test4 = true; //no error

// Explicit declartion of type

//String
const test5: string = "test";
// test5 = 12; //error

//Number
const test6: number = 1;
//test6 = "12"; //error

//Boolean
const test7: boolean = false;
//test7 = 1; //error

//any
let test8: any; //default type is "any" if not assigned any value to a variable
test4 = 12; //no error
test4 = "12"; //no error
test4 = true; //no error

// Array
let hobbies = ["chess", "code"];
// hobbies = [100, "code"]; // error

let hobbies1: any[] = ["chess", "code"];
hobbies1 = [100, "code"]; //no error

// touples
let counts = ["string", 123];
counts = [123, "string"]; // no error

let counts2: [string, number] = ["string", 123];
// counts2 = [123, "string"]; // error

//enum

enum Color {
  Green,
  Yellow,
  Red
}

const myColor1: Color = Color.Green;
const myColor2: Color = Color.Yellow;
const myColor3: Color = Color.Red;
console.log(myColor1); //0
console.log(myColor2); //1
console.log(myColor3); //2

enum Color2 {
  newGreen = 100,
  newYellow,
  newRed = 2,
  newRed2
}

const myColor11: Color2 = Color2.newGreen;
const myColor12: Color2 = Color2.newYellow;
const myColor13: Color2 = Color2.newRed;
const myColor14: Color2 = Color2.newRed2;

console.log(myColor11); //100
console.log(myColor12); //101
console.log(myColor13); //2
console.log(myColor14); //3

//function name(arg: type, arg:type, []...]): return type
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

function displayName(): void {
  console.log(name);
}

//function types
let myName;
myName = multiply; //no error
myName = displayName; //no error

let myNewName: (a: number, b: number) => number;
// myNewName = displayName;//error
myNewName = multiply; //no error

//Object types
let myObj: { name: string; age: number } = {
  name: "santosh",
  age: 20
};

// complex object types
let newMyObj: { data: number[]; outPut: (all: number[]) => number[] } = {
  data: [1, 2, 3],
  outPut: function(all: number[]) {
    return all;
  }
};

// type alias
type ComplexObject = { data: number[]; outPut: (all: number[]) => number[] };
let newMyObj2: ComplexObject = {
  data: [1, 2, 3],
  outPut: function(all: number[]) {
    return all;
  }
};

// union types
let varialble: string | number = "variable Name";
varialble = 23;
// varialble = false;//error

// never types
function returnNewValue(): never {
  throw new Error("some error");
}

// Exercise
type BankAccount = { money: number; deposit: (value: number) => void };
let bankAccount: BankAccount = {
  money: 100,
  deposit(value: number): void {
    this.money += value;
  }
};

let mySelf: { name: string; bankAccount: BankAccount; hobbies: string[] } = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["chess", "code"]
};

mySelf.bankAccount.deposit(3000);

console.log(mySelf);

//Ecercise 2
// function double(value) {
//   return value * 2;
// }
// console.log(double(10));
//Solution
const double: (a: number) => number = (value: number) => value * 2;

//Ecercise 3
// var greet = function(name) {
//if(name===undefined){
// name="max"
// }
//   console.log("Hello, "+name)
// }
//greet("Anna");
//Solution

const greet: (a: string) => void = (name: string = "Max"): void =>
  console.log(`Hello, ${name}`);
greet("Anna");
