let num =123
let num2 =123.123687

12.6234343
12
// console.log(num,num2)
// console.log(typeof num, typeof num2)
// let newnum = new Number(123456)
// console.log(newnum)

// it fixed decimal value 
console.log(num2.toFixed(1))

// to give perfect number 
console.log(num2.toPrecision(4))

console.log(num.toString())

console.log(parseInt(num2))

console.log(parseFloat(num2))

let str = "ab"
console.log(Number(str))
// NaN => not a number 

console.log(isNaN(str))

let num3 = 10000
// e = 10 it is formula
console.log(num3.toExponential(2))
// let a = 10
// console.log(a++)
// console.log(a++)
// console.log(a)

// a = a - 1
// a -= 1


console.log(Math.PI)
let a = -12
console.log(Math.abs(a))

let b = 12.456
let c = 12.567
let d = 12.678

console.log(Math.ceil(b))
console.log(Math.floor(b))
console.log(Math.round(b))
console.log(Math.round(c))
console.log(Math.round(d))

console.log(Math.max(12,23,34,45))
console.log(Math.min(12,23,34,45))

console.log(Math.pow(2,4))

console.log(Math.sqrt(25))