class Person {
  private type: string = 'coll';
  name: string;
  protected age: number = 27;
  constructor(name: string, public username: string) {
    this.name = name;
  }
}

const me = new Person('santosh', 'santa');
console.log(me);

//Difference Between Private and Protected
//Private: Private members of the class are not accessible by its child class and istance
//like if I do like console.log(me.type) it will through error by typescript but
// if type value is initialised that in browser I can see type property of the instace
//Protected: protected members are transfered to the inherited class.

class Santosh extends Person {
  constructor(public username: string) {
    super('Santosh', username);
    // this.age = 30; //to have getter and setter we have to declare a private property in the class
  }
  private _age: number = 30;

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

  get age() {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }
}

const santosh = new Santosh('rsreddy');
santosh.age = 50;
console.log(santosh);
// console.log(santosh.age);//Wrong the age property is protected,
//so even though we have getter for age this is not accessible.
//To access age we have to make get function name to age same as set.

//*********Static properties and methods*****/
//Static properties and methods are used to use the properties without instansiating the class
class Helper {
  static PI: number = 3.14;
}
console.log(Helper.PI);

/****Abstract classes****/
/*Abstract classes cant be instanciated. These are only used for onheritance */

abstract class Project {
  projectName: string = 'default';
  budget: number = 1000;

  abstract changeName(name: string): void;
  calCulateBudget() {
    return this.budget * 2;
  }
}

// const ITProject = new Project(); //error

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

const myProject = new ITProject();

//Default property creation

class TestClass {
  // constructor(name: string) {}
  //this will not create property name for the class, we have to define as one of the accessor property
  //output: TestClass {}
  constructor(public name: string) {} //output: TestClass {name: "santosh"}
}

const newTest = new TestClass('santosh');
console.log(newTest);

//Private constructor (singleton class)

class OnlyOne {
  private static instance: OnlyOne;
  private constructor(public name: string) {}

  public static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('Default');
    }
    return OnlyOne.instance;
  }
}

// const wrong = new OnlyOne('singleton');
const right = OnlyOne.getInstance();

console.log(right);

// Making properties readonly
//Option 1: create only getter and no setter
//Option 2: use readonly
class ReadOnlyProps {
  constructor(private _name: string) {}
  get name() {
    return this._name;
  }
}

class ReadOnlyProps2 {
  constructor(public readonly _name: string) {}
}

const newReadOnlyProps = new ReadOnlyProps('readONly');
const newReadOnlyProps2 = new ReadOnlyProps2('readONly');
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

class Car {
  constructor(public name: string) {}
  acceleration: number = 0;
  hunk: () => void = () => console.log('TTTToooT');
  accelerate: (value: number) => void = (value: number) => {
    this.acceleration = this.acceleration + value;
  };
}
const bmw = new Car('BMW');
console.log(bmw);
bmw.accelerate(10);
console.log(bmw);

//Exetcise 2: Inheritance
