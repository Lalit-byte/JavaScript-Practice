const score = 400
console.log(typeof score)  //number
console.log(score) //400

const balance = new Number(100)
console.log(balance)  //[Number: 100]

console.log(balance.toString().length)

console.log(balance.toFixed(2));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))



// +++++++++++++ Maths ++++++++++++++//

console.log(Math)

console.log(Math.abs(-4))  // this funciton will make it a positive number

console.log(Math.round(6.4)) // will make it 6
console.log(Math.round(6.5)) // will make it 7
console.log(Math.ceil(6.5))   // will make it 7
console.log(Math.floor(6.5))  //will make it 6

// other function min,max


// random function
console.log(Math.random())       //0.23684148204945377
console.log(Math.random()*10)    //3.5658491601420472
console.log((Math.random()*10) +1) // always give 1. or more then 1.

console.log(Math.floor(Math.random()*10)+1)  // it will give decimal number

const min = 10
const max = 20

Math.random() * (max-min +1)

console.log(Math.floor(Math.random() * (max - min +1)) + min)   // will give random number 10 to 20


