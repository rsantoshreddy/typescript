"use strict";
console.log("hi there");
//String
var test = "test";
//test = 12; //error
//Number
var test2 = 1;
//test2 = "12"; //error
//Boolean
var test3 = false;
//test3 = 1; //error
//any
var test4; //default type is "any" if not assigned any value to a variable
test4 = 12; //no error
test4 = "12"; //no error
test4 = true; //no error
// Explicit declartion of type
//String
var test5 = "test";
// test5 = 12; //error
//Number
var test6 = 1;
//test6 = "12"; //error
//Boolean
var test7 = false;
//test7 = 1; //error
//any
var test8; //default type is "any" if not assigned any value to a variable
test4 = 12; //no error
test4 = "12"; //no error
test4 = true; //no error
// Array
var hobbies = ["chess", "code"];
// hobbies = [100, "code"]; // error
var hobbies1 = ["chess", "code"];
hobbies1 = [100, "code"]; //no error
// touples
var counts = ["string", 123];
counts = [123, "string"]; // no error
var counts2 = ["string", 123];
// counts2 = [123, "string"]; // error
//enum
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Red"] = 2] = "Red";
})(Color || (Color = {}));
var myColor1 = Color.Green;
var myColor2 = Color.Yellow;
var myColor3 = Color.Red;
console.log(myColor1); //0
console.log(myColor2); //1
console.log(myColor3); //2
var Color2;
(function (Color2) {
    Color2[Color2["newGreen"] = 100] = "newGreen";
    Color2[Color2["newYellow"] = 101] = "newYellow";
    Color2[Color2["newRed"] = 2] = "newRed";
    Color2[Color2["newRed2"] = 3] = "newRed2";
})(Color2 || (Color2 = {}));
var myColor11 = Color2.newGreen;
var myColor12 = Color2.newYellow;
var myColor13 = Color2.newRed;
var myColor14 = Color2.newRed2;
console.log(myColor11); //100
console.log(myColor12); //101
console.log(myColor13); //2
console.log(myColor14); //3
//function name(arg: type, arg:type, []...]): return type
function multiply(value1, value2) {
    return value1 * value2;
}
function displayName() {
    console.log(name);
}
//function types
var myName;
myName = multiply; //no error
myName = displayName; //no error
var myNewName;
// myNewName = displayName;//error
myNewName = multiply; //no error
//Object types
var myObj = {
    name: "santosh",
    age: 20
};
// complex object types
var newMyObj = {
    data: [1, 2, 3],
    outPut: function (all) {
        return all;
    }
};
var newMyObj2 = {
    data: [1, 2, 3],
    outPut: function (all) {
        return all;
    }
};
// union types
var varialble = "variable Name";
varialble = 23;
// varialble = false;//error
// never types
function returnNewValue() {
    throw new Error("some error");
}
var bankAccount = {
    money: 100,
    deposit: function (value) {
        this.money += value;
    }
};
var mySelf = {
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
var double = function (value) { return value * 2; };
//Ecercise 3
// var greet = function(name) {
//if(name===undefined){
// name="max"
// }
//   console.log("Hello, "+name)
// }
//greet("Anna");
//Solution
var greet = function (name) {
    if (name === void 0) { name = "Max"; }
    return console.log("Hello, " + name);
};
greet("Anna");
