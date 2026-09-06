const myNums = [1,2,3,4,5,6,7,8,9,10]


// Implicit return with Filter function
const newNums = myNums.filter( (num) => num>4 )

//explicit return
// const newNums = myNums.filter( (num)=>{
//    return num>4
// })

console.log(newNums)


// if we dont use filter the how we will do it using for each 
const newNum = []
myNums.forEach((num)=>{
    if(num>4){
        newNum.push(num)
    }
})
console.log(newNum)




const books = [
    {
        title: 'Book One',
        genre: 'Fiction',
        publish: 1981,
        edition: 2004
    },
    {
        title: 'Book Two',
        genre: 'Non-Fiction',
        publish: 1992,
        edition: 2008
    },
    {
        title: 'Book Three',
        genre: 'History',
        publish: 1999,
        edition: 2007
    },
    {
        title: 'Book Four',
        genre: 'Non-Fiction',
        publish: 1989,
        edition: 2010
    },
    {
        title: 'Book Five',
        genre: 'Science',
        publish: 2009,
        edition: 2014
    },
    {
        title: 'Book Six',
        genre: 'Fiction',
        publish: 1987,
        edition: 2010
    },

    // Added 3 more objects
    {
        title: 'Book Seven',
        genre: 'Biography',
        publish: 2015,
        edition: 2018
    },
    {
        title: 'Book Eight',
        genre: 'Science',
        publish: 2012,
        edition: 2020
    },
    {
        title: 'Book Nine',
        genre: 'History',
        publish: 2005,
        edition: 2016
    }
];

let userBooks = books.filter( (bk) => {
    return bk.genre === "History"
})

userBooks = books.filter( (bk) => bk.publish >= 2007 )
console.log(userBooks)



// +++++++++++++  MAP  +++++++++++++++++  

const newMapNum = myNums.map((num) => num +10)
console.log(newMapNum)

const newM = newNums
             .map((num) => num * 10)
             .map((num) => num + 1)
             .filter( (num) => num>=40)

console.log(newM)




// ++++++++++++++++++ Reduce ++++++++++++++++

const myNum = [1,2,3]

// const myTotal = myNum.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator value ${accumulator} and currVal ${currentValue}`)
//     return accumulator + currentValue
// },0)

const myTotal = myNum.reduce((acc, curr) => acc + curr ,0)



const shoppingCart = [
    {
       items : "js Course",
       price : 999 
    },
    
    {
       items : "java Course",
       price : 1999 
    },

    {
       items : "Python Course",
       price : 1599 
    },

    {
       items : "js Course",
       price : 499 
    }
]

const cartTotal = shoppingCart.reduce((acc,item) => acc + item.price ,0)
console.log(cartTotal)