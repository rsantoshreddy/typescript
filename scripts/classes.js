"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = 'coll';
        this.age = 27;
        this.name = name;
    }
    return Person;
}());
var me = new Person('santosh', 'santa');
console.log(me);
//Difference Between Private and Protected
//Private: Private members of the class are not accessible by its child class and istance
//like if I do like console.log(me.type) it will through error by typescript but
// if type value is initialised that in browser I can see type property of the instace
//Protected: protected members are transfered to the inherited class.
var Santosh = /** @class */ (function (_super) {
    __extends(Santosh, _super);
    function Santosh(username) {
        var _this = _super.call(this, 'Santosh', username) || this;
        _this.username = username;
        _this._age = 30;
        return _this;
        // this.age = 30; //to have getter and setter we have to declare a private property in the class
    }
    Object.defineProperty(Santosh.prototype, "age", {
        //   get getAge(): number {
        //     return this.age;
        //   } //Will not work, if we call as instance.age, we have to call instance.getAge
        //   set setAge(age: number) {
        //     this.age = age;
        //   }//will not work, if we call as instance.age=34, we have to call instance.setAge=34
        // set age(age: number) {
        //   this.age = age;
        // } //will not work, the setter name and property name are same.It will enter into infinite loop.
        // get age(): number {
        //   return this.age;
        // } //Will not work, the getter name and property name are same.
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    return Santosh;
}(Person));
var santosh = new Santosh('rsreddy');
santosh.age = 50;
console.log(santosh);
// console.log(santosh.age);//Wrong the age property is protected,
//so even though we have getter for age this is not accessible.
//To access age we have to make get function name to age same as set.
//*********Static properties and methods*****/
//Static properties and methods are used to use the properties without instansiating the class
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.PI = 3.14;
    return Helper;
}());
console.log(Helper.PI);
/****Abstract classes****/
/*Abstract classes cant be instanciated. These are only used for onheritance */
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'default';
        this.budget = 1000;
    }
    Project.prototype.calCulateBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
// const ITProject = new Project(); //error
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var myProject = new ITProject();
//Default property creation
var TestClass = /** @class */ (function () {
    // constructor(name: string) {}
    //this will not create property name for the class, we have to define as one of the accessor property
    //output: TestClass {}
    function TestClass(name) {
        this.name = name;
    } //output: TestClass {name: "santosh"}
    return TestClass;
}());
var newTest = new TestClass('santosh');
console.log(newTest);
//Private constructor (singleton class)
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('Default');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// const wrong = new OnlyOne('singleton');
var right = OnlyOne.getInstance();
console.log(right);
// Making properties readonly
//Option 1: create only getter and no setter
//Option 2: use readonly
var ReadOnlyProps = /** @class */ (function () {
    function ReadOnlyProps(_name) {
        this._name = _name;
    }
    Object.defineProperty(ReadOnlyProps.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return ReadOnlyProps;
}());
var ReadOnlyProps2 = /** @class */ (function () {
    function ReadOnlyProps2(_name) {
        this._name = _name;
    }
    return ReadOnlyProps2;
}());
var newReadOnlyProps = new ReadOnlyProps('readONly');
var newReadOnlyProps2 = new ReadOnlyProps2('readONly');
// newReadOnlyProps.name = 'santosh'; wrong
// newReadOnlyProps2.name = 'santosh'; //wrong;
//Exercise:1
//Make below code to typeScript
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;
//   this.honk = function() {
//     console.log('toooot');
//   };
//   this.accelerate=function(){speed}{
//     this.acceleration= this.acceleration+ScopedCredential;
//   }
// }
var Car = /** @class */ (function () {
    function Car(name) {
        var _this = this;
        this.name = name;
        this.acceleration = 0;
        this.hunk = function () { return console.log('TTTToooT'); };
        this.accelerate = function (value) {
            _this.acceleration = _this.acceleration + value;
        };
    }
    return Car;
}());
var bmw = new Car('BMW');
console.log(bmw);
bmw.accelerate(10);
console.log(bmw);
//Exetcise 2: Inheritance
