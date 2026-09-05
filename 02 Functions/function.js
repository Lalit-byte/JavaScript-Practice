// function with objects --->>

// example when you are working on shopping cart functionality
// that time you use rest operator for parameters -->
 function calculateCartPrice(...num1){
    return num1
 }

 console.log(calculateCartPrice(20000,400,500))

  function calculateCartPrice2(val1, val2, ...num1){
    return num1
 }

 console.log(calculateCartPrice2(20000,400,500,800,736,459))

 // object with functions --->>>

 const user = {
    username : "Lalit",
    prices : 199    
 }

 const user2 = {
   username: "MNS",
   price : 599
 }

 function handleObject (anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`)
 }

 handleObject(user2)
 handleObject(user)

 const myNewArray = [200,400,100,700,800]

 function returnSecondValue(getArr){
   return getArr[1]
 }

 console.log(returnSecondValue(myNewArray))

 console.log(returnSecondValue([800,128,600,900]))