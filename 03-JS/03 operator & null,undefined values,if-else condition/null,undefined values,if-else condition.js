// null value --> mvr holds a value null
mvr = null

console.log(mvr)

// undefined --> mvr1 holds nthe value null
var mvr1 
console.log(mvr1)

// if condition
if(7 > 5){
    console.log(true)
}
// if else condition
if(5 > 7){
    console.log(true)
}else{
    console.log(false)
}
// if else if condtion
if(5 > 7){
    console.log('5 > 7')
}else if(7 > 8){
    console.log('7 > 8')
}else{
    console.log('Nothing')
}
// eg.,
console.clear()

var currentDay = 'Mon'

if(currentDay === 'Mon'){
    console.log('Timing : 10:00 TO 06:00')
}else if(currentDay === 'Tue'){
    console.log('Timing : 10:30 TO 06:30')
}else if(currentDay === 'Wed'){
    console.log('Timing : 11:00 TO 07:00')
}else if(currentDay === 'Thu'){
    console.log('Timing : 11:30 TO 07:30')
}else if(currentDay === 'Fri'){
    console.log('Timing : 12:00 TO 08:00')
}else if(currentDay === 'Sat'){
    console.log('Timing : 12:30 TO 08:30')
}else if(currentDay === 'Sun'){
    console.log('Timing : 01:30 TO 04:30')
}else{
    console.log('Timing : ERROR')
}

// Switch Statement--> Same as if-else
switch(currentDay){
    case 'Mon' :
        console.log('Timing : 10:00 TO 06:00')
        break;
    case 'Tus' :
        console.log('Timing : 10:30 TO 06:30')
         break;
    case 'Wed' :
        console.log('Timing : 11:00 TO 07:00')
        break;
    case 'Thu' :
        console.log('Timing : 11:30 TO 07:30')
        break;
    case 'Fri' :
        console.log('Timing : 12:00 TO 08:00')
        break;
    case 'Sat' :
        console.log('Timing : 12:30 TO 08:30')
        break;
    case 'Sun' :
        console.log('Timing : 01:30 TO 04:30')
        break;

    default:

    console.log('Timing : ERROR')
}

