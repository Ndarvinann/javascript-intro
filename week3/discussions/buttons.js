let data = [ //initialize an array with data.
    { id: 1, name: "Kigozi Bosco", email: "kigozi@gmail.com" },
    { id: 2, name: "Jane Mary", email: "janeM@gmail.com" },
    { id: 3, name: "Petero ", email: "petero@gmail.com" },
    {id: 4, name: `John kalevu`, email: `johnmary@gmail.com`}
  ];
  
  let tableBody = document.querySelector("#dataTable tbody"); // get references to the table body. general purpose selector, like css.
  let createForm = document.getElementById("createForm");
  let createButton = document.getElementById("createButton");
  let saveButton = document.getElementById("saveButton");
  let  cancelButton = document.getElementById("cancelButton");
  
  function editTable() { // clear existing table rows, iterates the data array, creates table rows and cells, adds read, update and delete. adds rows to the body
    tableBody.innerHTML = ""; //clears out the table to avoid duplicates.
    data.forEach(item => { // for each item inside the datalist, do the things {here}.
      let row = document.createElement("tr"); //the js way of creating a table row.
      row.innerHTML = `  
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td class="action-buttons">
          <button onclick="readItem(${item.id})">Read</button>
          <button onclick="updateItem(${item.id})">Update</button>
          <button onclick="deleteItem(${item.id})">Delete</button>
        </td>
      `; // this writes the new content of the table row. the action button ceates a row for the action buttons.
      tableBody.appendChild(row); // add the newly created row to te tables body. append adds it as the last child of an element.
    });
  }
  
  editTable(); // calls the function to populate the table.
  
  createButton.addEventListener("click", () => { // adds a click to `creat new`
    createForm.style.display = "block"; //css design
  });
  
  cancelButton.addEventListener("click", () => { // adding a click event to the cancel button.
    createForm.style.display = "none"; //hides the create form field and clears input data.
    document.getElementById("newName").value = ""; 
    //These clear input from the email and name fields.
    document.getElementById("newEmail").value = ""; 
  });
  
  saveButton.addEventListener("click", () => { // adds click to the button 
       saveButton.preventDefault()
      let newName = document.getElementById("newName").value; // retrive the html with id, and the user input for 'name'
      let newEmail = document.getElementById("newEmail").value;
  
      if (newName && newEmail) { // if both new name and email have values,
          const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;  // if the data array is  not empty, generate an id greater than the last one. if it is empty, set id to 1. (if else short hand.)
          data.push({ id: newId, name: newName, email: newEmail }); // push adds elements to the end of an array. 
          editTable(); // calling on this to ensure the data displayed reflects the changes. 
          createForm.style.display = "none";
          document.getElementById("newName").value = ""; //clears the input before new info is input without having to do it manually. 
          document.getElementById("newEmail").value = "";
      }
  });  // question for Ln50.


  // the action buttons
  function readItem(id) { // id of the data to be retrived.
      let  item = data.find(item => item.id === id); // validation. is the item found === the picked ID?
      if(item){
          alert(`ID: ${item.id}\nName: ${item.name},\nEmail: ${item.email}`);
      }
  }
  
  function updateItem(id) {
    let itemIndex = data.findIndex(item => item.id === id); //returns the 1st element of the array that satisfies the testing function.
    if (itemIndex !== -1) {
    const newName = prompt("Enter new name:", data[itemIndex].name);
      const newEmail = prompt("Enter new email:", data[itemIndex].email);
      if (newName && newEmail) {
        data[itemIndex].name = newName;
        data[itemIndex].email = newEmail;
        renderTable();
      }
    }
  }
  
  function deleteItem(id) {
    const itemIndex = data.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      if (confirm("Are you sure you want to delete this item?")) {
        data.splice(itemIndex, 1);
        renderTable();
      }
    }
  }





