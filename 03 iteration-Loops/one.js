// for loop

// for (let index=0; index <=10; index++){
//     const element = index;
//     if(element == 5){
//         console.log("5 is best number");
//     }
//     console.log(element);

// }
  
// for (let i = 0; i < 5; i++) {
//     console.log(`Outer loop value : ${i}`)

//     for (let j = 0; j < 5; j++) {
//         // console.log(`Inner loop value is ${j} and outer loop ${i}`)
//         console.log(i +"*"+j+'=' +i*j)
       
//     }
    
// }


// for loop with array ---->>>

// let myNewArray = ["flash" , "batman" , "spiderman"]
// console.log(myNewArray.length)

// for (let index = 0; index < myNewArray.length; index++) {
//     const element = myNewArray[index];
//     console.log(element)
    
// }


// while loop

// let a=1
// while(a<5){
//     console.log(a);
//     a++;
// }


//do while

// let i=18
// do{
//     console.log("score is : "+i)
//     i++
// }while(i<10)


// for of loop
//we can use it in array or objects or string 

// const myString = "HelloiamLalit";  //using string

// for(const ch of myString){
//     console.log(ch)
// }


// const arr = ["hello","lalit", "Bisht"]   // using array

// for(const ar of arr){
//     if(ar == "lalit"){
//         console.log("Found Lalit..")
//         continue;
//     }
//     console.log(ar)
// }


// Map

// const map = new Map()
// map.set('IN','India')
// map.set('USA', "United States of America")
// map.set('FR',"France")
// map.set("IN", "India")

// console.log(map)

// for (const [key,value] of map) {
//     console.log(key ,value)
// }




// const myObj ={
//     'game1' : 'LLT',
//     'game2' : 'Thkr'
// }

// Note : for of loop will not iterate in objects

// for (const [key,value] of myObj) {
//     console.log(key,value)
// }



// fot in loop

const myObj2 = {
    'js' : 'javaScript' ,
    'cpp' : 'C++' ,
    'py' : 'Python'
}

// Note : for in loop will iterate in objects
for (const key in myObj2) {
    console.log(myObj2[key])
}

const arr = [1,2,8,4,7]
for(const key in arr){
    console.log(key)  // it will print index values
    console.log(arr[key])
}



