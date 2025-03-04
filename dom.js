//dom- document object model. interface that allows js to interact with css and html.
//When a web page loads, the browser converts the HTML into a structured tree-like model called the DOM. Every HTML element (e.g., <div>, <p>, <button>) becomes a node in this tree.
// this, like the html class and Id, chooses where to put what according to your specifications. has things like getElementById(interfaces elements by required ID.)
//Allows dynamic updates without reloading the page. Enables event-driven programming (e.g., handling clicks, form submissions). Essential for frontend web development with JavaScript.
//console.log(document.head);
//let car={
    model:25,
  //  color :  "black"

//console.log(car)

//document.getElementById()
//document.getElementsByTagName()
//document.querySelector()

const allHeadings = document. getElementsByTagName("h1")
console.log(allHeadings);