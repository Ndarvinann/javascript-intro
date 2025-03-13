// object literal
const person = {
    name : `Darvin`,
    age : 19,
    greet : function(){
        console.log(`my name is ${this.name}`)
    }
}

function Person(name , age){ // capitalP is a constructor function. makes objects
    this. name = name
this. age = age
}
 const person2 = new Person(`ann` , 34)
 console.log(person2)
 Person.greet = function(){
    console.log(`Hello my name is $(this.name)`)
 }
 const person3= new Person(`Brian`, 29)
 console.log(person3)
 person3.greet()


 class Person{
    constructor( name , age)
    {
        this.name = name ;
        this. age = age  ;
    }
 }