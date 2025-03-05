
let paragraph = document.querySelector('p');
console.log(paragraph.textContent); //This accesses only the text content of that selected paragraph. leave it without if you want the string as it exists.
// byTagName
let paragraph1= document.getElementsByTagName('p');
let firstParagraph = paragraph1[0];// js looks at these paragraphs like arrays and manipulates them that way. 1st index is 0.
console.log(firstParagraph);

//get each paragraph using querry selector. 
 let paragraph2 = document.querySelector("#secondParagraph")//This selects the paragraph element with the specific ID "secondParagraph". 
console.log(`paragraph2:`, paragraph2);
let paragraph3 = document.querySelector("#thirdParagraph")
console.log(`paragraph3:`, paragraph3);
let paragraph4 = document.querySelector
("#fourthParagraph");
console.log(`paragraph4:`, paragraph4);
// get each paragraph by Id.
let para2 = document.getElementById('secondParagraph');
console.log(para2);
let para3 = document.getElementById('thirdParagraph')
console.log(para3);
let para4 = document.getElementById('fourthParagraph')
console.log(para4);
let para5 = document.getElementById('fifthParagraph')
console.log(para5);

//3
let graphs = document.querySelectorAll('p');//gets all p elements 
console.log (graphs); //summary.
console.log(graphs[0]);// show the detailed content of the 1st paragraph. 

 //4 loop through the node list to get a text content of each paragraph.
// using a for...of loop.
for(let graph of graphs){ 
    console.log(graph.textContent);
}
//  or trad. for loop 
for(let i =0; i<graphs.length; i++){ 
    console.log(graphs[i].textContent);
}
//or for each
graphs.forEach(graphs=>{ //1st graph is your node list. for each graph, do whatever is in the brackets. 
    console.log(graphs.textContent);
})

//5 
//Set a text content to paragraph the fourth paragraph,Fourth Paragraph.
let x = document.getElementById('fourthParagraph');
x. textContent = "fourth Paragraph"; 
//or
let y = document.querySelectorAll('p')[3]// this selects the 4th element in the node list, and replaces it with the new string. 
y. textContent = "fourth Paragraph"; 

//6
// using setAttribute
graphs.forEach((paragraph , index ) => {
    paragraph.setAttribute('id',`paragraph-${index+1}`);
})
console.log(graphs);

//or 
// direct property assignment.