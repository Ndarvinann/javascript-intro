//event listener vs handler(consider this for the login/registration forms)
//event Handler
let btn = document.getElementById('btn')
btn.onclick=function( ){
    console.log('button clicked') // works with only one event. 
}
btn.onclick=function( ){
    console.log(`overwritten`)
}
    //element.onClick = function. cons

// eventListener. more dynamic than the handler.
let btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    console.log(`button clicked`) // works with more than one function on one element, easier to edit
})
//element.addEventListener( event , function)--syntax

function sayHello() {
    console.log(`hello`)
}
btn.addEventListener(`click`, sayHello)
btn.removeEventListener(`click`, sayHello) 