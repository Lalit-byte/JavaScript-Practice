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

function User(username, loginCount , email){
    this.username = username;
    this.loginCount = loginCount;
    this.email = email;

    return this;
}

const userOne = new User("Lalit","6","lalit@mail.com")
console.log(userOne.username)