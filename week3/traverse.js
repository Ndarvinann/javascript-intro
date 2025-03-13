//parents, siblings, children
//traversing helps navigate the dom
let parent = document.getElementById(`produce`)
console.log(parent.children)
console.log(parent.firstElementChild.textContent)
console.log(parent.lastElementChild.textContent)

let child = document.getElementById(`text`)
console.log(child.parentElement)

let middleSibling = document.getElementById(`middle`)
console.log(middleSibling. previousElementSibling.textContent)
// assgn. write 4 kgl functions for creating, deleting, edit buttons. 
