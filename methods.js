//methods these are variables inside functions
/*let person = {
    name: "John",
    age: 30,
    speak : function(){
        console.log("Hello my name is" + this.name `i am`+this.age + `years old.`) // this one works like ${}
    }
}
console.log(person.name)
person.speak()*/

let store = {
    name: `karibu groceries`,
    location: `maganjo`,
    stock: {
   beans:100,
   maize : 200,
},
saleProduce : function( quantity){
console.log(`sold successfully`);
}
    }
    store.saleProduce()

    let calculator ={
        add : function(a,b){
            return a+b
        },
        subtract : function(a,b){
            return a-b
        },
        divide : function( a,b){
            return a/b
        },
        multiply  : function( a,b){
            return a*b
        },
    }
    calculator.add(7,9)
    calculator.subtract(17,9)
    calculator.divide(100, 9)
    calculator.multiply( 4,5)