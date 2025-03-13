// function to create an element in the DOM. 

function create(){
    const paragraph= document.createElement('button')
    paragraph.innerHTML=`what is your name?` // pushes words between the paragraph2
    document.body.appendChild(paragraph) // connect to the button.
    //console.log("clickbutton")
}

// function to read an element in the DOM. 
function read(){
    const readQn = document.getElementById('readQn')
}
// function to update  an element in the DOM. 
function update(){
    const updateQn = document. getElementById('updateQn')
}
// function to delete an element in the DOM. 
function delitus (){
    const deleteQn = document. getElementById('deleteQn')
}
