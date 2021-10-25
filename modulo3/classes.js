class Person {
    constructor (firstName, lastname, age, gender, interests){
        this.firstName = firstName;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting = function(){console.log(`Hi! I'm ${this.firstName}`)}
    bio = function(){console.log(`${this.firstName} is ${this.age} years old. They like ${this.interests}.`)}
}

class Teacher extends Person {
    constructor(firstName, lastname, age, gender, interests,subject,prefix){
        super(firstName, lastname, age, gender, interests);
       
        this.subject = subject;
        this.prefix = prefix;
    }
    bio(){
        super.bio();
    }
    greeting = function(){console.log(`Hello. My name is ${this.prefix} ${this.lastname} and I teach ${this.subject}.`)}
}

class Student extends Person {
    constructor(firstName, lastname, age, gender, interests){
        super(firstName, lastname, age, gender, interests)
    
        }
    
   
    bio() {
        super.bio()
    } 
   
    greeting = function(){console.log(`Yo! I'm ${this.firstName}!`)}
}