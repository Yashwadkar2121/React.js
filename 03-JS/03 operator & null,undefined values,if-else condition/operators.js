var num111 = 10;
var num222 = 20;

// Arithmetic Opertors
num111 + num222 
num111 - num222 
num111 * num222 
num111 / num222 
// reminder
num111 % num222 
// increment
num111 ++ 
// decrement
num111 --

// Assignment Opertors
var num222 = 20;
num111 += num222 // 10 = 10 + 20 ;put in value num111 = 30
num111 -= num222 
num111 *= num222
num111 /= num222
num111 %= num222

// Comperison Opertors (it give a value in True or False)
num111 == num222 // equal
num111 === num222
num111 != num222 // not equal
num111 !== num222
num111 < num222 // less then
num111 <= num222
num111 > num222 // greater then
num111 >= num222

// Logical Opertors (it give a value in True or False)
num111 && num222 // and 
num111 || num222 // or

// Ternary Opertors (expression )  a : b ?
20 < 3 ? console.log(true) : console.log(false)

// Implicit
var mStr = "Hello"
var mNum = 5
var mSum = mStr + mNum

console.log(mSum)
console.log(typeof(mSum))

var mValue = +'2'
console.log(mValue)
console.log(typeof(mValue))

// Explicit type of coercion
var myNum = 15
console.log(typeof(String(myNum)))
console.log(typeof(Number(myNum)))
console.log(typeof(Boolean(myNum)))
