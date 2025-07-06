let add = document.getElementById("ADD");
let key = localStorage.getItem('key');
if (key === null) {
    key = 0;
}
let todos = []
var editingTodoId = null;

add.addEventListener('click', function () {

    if (editingTodoId !== null) {
        updatedtodoid = todos.filter(todo => todo.id === editingTodoId);
        console.log(updatedtodoid, "updatedtodoid")
        updatedtodoid.text = document.getElementById("input").value;
        let dom = document.getElementById(editingTodoId);
        dom.textContent = updatedtodoid.text;
        localStorage.setItem(editingTodoId, updatedtodoid.text)
        console.log(dom, "dom")
        editingTodoId = null;
        editbuttonhandler(dom, todos)
        document.getElementById("input").value = ""

        return;
    }
    let txt = document.getElementById("input").value; // Get the value of the input field
    console.log(txt);


    let container1 = document.querySelector('.container1'); // Get the container with class "container1"

    if (!container1) {
        container1 = document.createElement("div"); // Create a new <div> element with class "container1" if it doesn't exist
        container1.className = 'container1';
        document.body.appendChild(container1); // Append the container to the body
    }

    let newElement = document.createElement("h3");
    newElement.className = 'txt1';
    newElement.id = key
    newElement.textContent = txt; // Set the text content of the <h3> element to the input value
    let obj = { id: key, text: txt }
    todos.push(obj);
    container1.appendChild(newElement); // Append the <h3> element to the "container1" div
    localStorage.setItem(key, txt)
    key++
    // console.log("todos test", todos)

    // Create the "Edit" button
    console.log(todos, "checking todolist")
    editbuttonhandler(newElement, todos)

    // Create the "Delete" button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger";
    deleteButton.addEventListener('click', function () {
        // Implement your delete logic here
        container1.removeChild(newElement); // Remove the <h3> element when the "Delete" button is clicked
    });

    // Append the buttons to the <h3> element
    newElement.appendChild(deleteButton);

    // Append the <h3> element with buttons to the container
    container1.appendChild(newElement);
});

function editbuttonhandler(newElement, todos) {
    console.log(newElement)

    let container1 = document.querySelector('.container1'); // Get the container with class "container1"

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "btn btn-primary";
    newElement.appendChild(editButton);
    editButton.addEventListener('click', function () {

        let value = localStorage.getItem(newElement.id)
        console.log(value)
        document.getElementById("input").value = value
        // container1.removeChild(newElement.id);
        editingTodoId = parseInt(newElement.id);
        console.log("Editing todo with ID:", editingTodoId);
    });
}

function displayLocalStorageData() {
    const dataList = document.getElementById('local');
    dataList.innerHTML = ''; // Clear any existing data

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        // Create a new <div> for each key-value pair
        const divItem = document.createElement('div');
        divItem.className = 'local-item';

        // Create a <p> element for the key
        const pKey = document.createElement('p');
        pKey.textContent = `Key: ${key}`;
        pKey.className = 'local-key';

        // Create a <p> element for the value
        const pValue = document.createElement('p');
        pValue.textContent = `Value: ${value}`;
        pValue.className = 'local-value';

        // Append the <p> elements to the <div>
        divItem.appendChild(pKey);
        divItem.appendChild(pValue);

        // Append the <div> element to the dataList
        dataList.appendChild(divItem);
    }
}

// Call the function to display localStorage data
displayLocalStorageData();




