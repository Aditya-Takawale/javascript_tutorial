const { log } = require("console")

let score = true

// console.log(typeof score)


let valueInNumber = Number(score) // convert string to number
// console.log(typeof valueInNumber)
// console.log(valueInNumber)


// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1 , false => 0



let isLoggedIn = "0"

let booleanisLoggedIn = Boolean(isLoggedIn) // convert number to boolean
// console.log(typeof booleanisLoggedIn)
// console.log(booleanisLoggedIn)


// 0 => false , 1 => true   
// "" => false , "Aditya" => true
// null => false
// undefined => false
// " " => true
// "0" => true
// "false" => true



let someNumber = 33

let stringNumber = String(someNumber) // convert number to string
//  console.log(typeof stringNumber)
//  console.log(stringNumber)





//  ********************** Operations ********************** //


let value = 3
let negValue = -value
// console.log(value)
// // console.log(negValue);

// console.log(2+2) // 4
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)


// let str1 = "Hello"
// let str2 = " Aditya"
// let str3 = str1 + str2
// console.log(str3)
// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+2)
// console.log(1+2+"2")


// console.log(+true)

// gameCounter = 100
// gameCounter++;
// console.log(gameCounter);


let x = 4;
const y = x++;

console.log("x:",x,"y:",y);
// Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);