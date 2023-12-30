// Strings
var myString1 = "JS"
var myString2 = 'JS'
var myString3= "JS" / is /"Programming lng" // This escape sequence
var myString3= "JS 'is' Programming lng"
var myString3= 'JS "is" Programming lng'

console.log(typeof(myString1))
console.log(typeof(myString2))
console.log(typeof(myString3))

// String Functions
var myString ="This is a string for javascript string function"
// Return the length of the string
console.log(myString.length)  
// Find index of a string inside another string
console.log(myString.indexOf('javascript'))  
console.log(myString.indexOf('string')) 
// Find Last index of a string inside another string
console.log(myString.lastIndexOf('javascript'))  
// Get the part of a string slice(Start, End)
console.log(myString.slice(0,48))  
console.log(myString.slice(-10))
console.log(myString.slice(45))  
 // Get Sub String Function -subtr(Start point, Length)
console.log(myString.substring(21,8)) 

var examplestring = " This is  Javascript tutorial"

// toUpperCase() - It converts our string --> uppercase character
console.log(examplestring.toUpperCase())

// toLowerCase() - It converts our string --> Lowercase character
console.log(examplestring.toLowerCase())

// concat() - It Merage two or more strings
var firstName = 'Javascript'
var lastName = 'Playground'
console.log(examplestring.concat(lastName))

console.log(examplestring.concat(firstName,lastName))
console.log(examplestring.concat("", firstName,"",lastName))

// another way to concat the string
console.log(firstName + lastName + examplestring )

// trim() --> It remove extra spaces
var extraSpacesString = '     mystring     '
var extraSpacesStringEg2 = '         my string   '

console.log(extraSpacesString.trim())
console.log(extraSpacesStringEg2.trim())

// charAt() --> this take a position as an arg and return the character at that position
var charAtEg = 'This is my test string'
console.log(charAtEg.charAt(5))
console.log(charAtEg.charAt(14))

// split() --> splits our string on the basis of the arguments passed 
var sampleString = ' This,is,my sample, string'
console.log(sampleString.split(','))


