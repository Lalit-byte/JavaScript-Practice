class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password    
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("lalit", "blalit@mail.com", "3434")
console.log(chai.encryptPassword())
console.log(chai.changeUserName())


// behind the scene

function User2(username, email, password){
    this.username = username;
    this.email = email
    this.password = password
}

User2.prototype.encryptPassword = function(){
    return `${this.password}#abl`
}

const thakur = new User2("thakur", "thakur@mail.com" , "3494")
console.log(thakur.encryptPassword())