/*

//LESSON 01
let x: number;
let y: string;
let z: any;
z = 4;
z ="hello";

const hello = "helloworld";

let q: unknown;

//void

function a1(): void{

} //function not returning any value

function a2(num1:number, num2: number): void{

} // returns nothing

function a3(num1:number, num2: number): number{
   return num1+num2;   //should return a number. otherwise it's an error
}

//array type

var nums1: number[] = [1,2,3,4];
var nums2: number[][] = [[]];

//tupple type

var tup: [string,number] = ["hello",2]

//object type

var obj: object = {};

//******* 
*/

/*
//LESSON 02

type Animal = {
    name: string,
    age: number;
    colors: string[];
    legs?: number;    //this question mark means that legs is optional to be a number
};


const printAnimal1 = (animal: Animal) => {
    console.log(animal.name, animal.age, animal.legs)
}

const printAnimal2 = (animal: Animal) => {
    const x = (animal.legs!== undefined ? animal.legs: 0)- 5; //if animal.legs is undefined, then use animal.legs and otherwise use zero
}


const dog1 = {
    name: "tim",
    age: 10,
    colors: ["brown","black"],
};

const dog2: Animal = {
    name: "tim",
    age: 10,
    colors: ["brown","black"],
};

const dog3 = {
    name: "tim",
    age: 10,
    colors: ["brown","black"],
} as Animal

//****** 

*/

/*
//LESSON 03
//Combining types

type Animal = {
    name: string,
    age: number;
    colors: string[] | string;
    legs?: number;    //this question mark means that legs is optional to be a number
};

type Farm = {
    animals: Animal[]
    animalNamesToObjects: {
        [name: string]: Animal
    }
}

type Monkey = {
    diet: string;
} & Animal; // Must have all properties from Animal + Monkey


//const m: Monkey = {
//   diet: "food",  //Error at m: Missing properties from Animal (name,age,..)
//}

//**********
*/

/*
//LESSON 04
//Typing Edge Cases

type Animal = {
    name: string,
    age: number;
    colors: string[];
    legs?: number;    //this question mark means that legs is optional to be a number
};

const s1 = new Set<any>();  //any type
const s2 = new Set<number>();  //number type

//**** 
*/
/*
//LESSON 05
//Interfaces

type Fish = {
    name: string;
    swim: () => void;
};

type Dog = {
    name: string;
    bark: () => void;
};

interface Animal {
    name: string;
}

//without interfaces
const printName1 = (animal: Dog | Fish) => {
    console.log(animal.name);
};
 //with interfaces
const printName2 = (animal: Animal) => {
    console.log(animal.name);
};

const x: Fish = {
    name: "hello",
    swim: () => {}
}

//****** 
*/


//LESSON 06
//Enums

enum ShirtSize {
    Small = "small",
    Medium = "medium",
    Large = "large",
}

const getShirtPrice = (shirtSize: ShirtSize) => {
    switch(shirtSize) {
        case ShirtSize.Small:
            return 10;
        case ShirtSize.Medium:
            return 20;
        case ShirtSize.Large:
            return 30;
        }
};

const price = getShirtPrice(ShirtSize.Small);

//***
