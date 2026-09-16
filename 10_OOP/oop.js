// const user = {
//     username : "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails : function(){
//         // console.log("Got user details from database");
//         console.log(`Username :${this.username}`);
//         console.log(this)
//     }
// }

// console.log(user.getUserDetails())

// Using constructor

function User(username, loginCount, email) {
  this.username = username;
  this.loginCount = loginCount;
  this.email = email;

  return this;
}

// if we don't use new keyword and try to make another user(userTwo) then userTwo will override the value of userOne
const userOne = new User("Lalit", "6", "lalit@mail.com");
console.log(userOne.constructor);

const userTwo = new User("Thakur", "15" , "thakur@mail.com")
// console.log(userTwo.username)

//step1 new keyword creates a empty object calls instance
//step2 new keyword calls constructor function
//step3 all the passed data will inject to this
//step 4 we get all data inside function
