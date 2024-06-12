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


