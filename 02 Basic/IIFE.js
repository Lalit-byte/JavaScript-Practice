// Immediately Invoked Function Expressions (IIFE)  --->>>

// function chai(){
//     console.log('DB Connected')
// }
// chai()


//This is IIFE we covered the function with parenthesis

(function chai(){      //named IIFE
    console.log('DB Connected')
})
();  // this parenthesis will execute the chai()


// NOTE: Because of Global Scope Pollution we use IIFE
// NOTE: Always need to use semicolon(;) to terminate IIFE

// IIFE with Arrow Function
( (name) => {
    console.log(`${name} we used IIFE with arrow function`)
})("lalit");