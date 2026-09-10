
// First Promise ----->> how to create Promise 
const promiseOne = new Promise(function(resolve, reject){
    // Do async task
    // DB calls , cryptography, network
    setTimeout(function(){
        console.log("Async task complete");
        resolve(  )
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

// second Promise ------>>  how to create and use Promise without storing it in variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

// Third Promise ---->>  how  to take and use Parameters in Promise

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Lalit", email: "lalit@mail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
    console.log(user.username)
    console.log(user.email)
})

// fourth Promise ---->>  how to use resolve and reject/catch 
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error  = false
        if(!error){
            resolve({username:"Thakur", password: "123"})
        } else{
            reject("ERROR: Something went wrong")
        }
    },2000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("The Promise is either Resolved or Rejected")
})


// fifth promise ----> handling promise using async await

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error  = false
        if(!error){
            resolve({username:"Java Script", password: "123"})
        } else{
            reject("ERROR: JS went wrong")
        }
    },2000)
});


// async function consumeFive(data){
//     const response = await promiseFive;
//     console.log(data,response); 
// }
// consumeFive("This is consumer five function")

async function consumerPromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response)
    }catch (error) {
       console.log(error) 
    }   
}
consumerPromiseFive()

 
// fetching data 
// async function getAllUser(){
//     try {
//        const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data) 
//     } catch (error) {
//        console.log("E: ",error) 
//     }
// }
// getAllUser()



fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data)=>{
    console.log(data)
})
.catch((err)=> console.log(error))


