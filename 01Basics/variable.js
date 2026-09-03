const accountID = 144553;
let accountEmail = "lalit@mail.com";
var accountPassword = "12345" 
accountCity = "Dehradun"

// accountId = 2  not allowed because of const

accountEmail = "thakur@mail.com"
accountPassword = "22222"
accountCity=  "Ramnagar"
let state ;    //if we print it, it will give undefined

console.table([accountID,accountEmail,accountPassword,accountCity,state])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/