let add = document.getElementById("ADD");
let key = localStorage.getItem('key');
if (key === null) {
    key = 0;
}
add.addEventListener('click', function() {
    
    let txt = document.getElementById("txt1").value; // Get the value of the input field
    console.log(txt);
    
    localStorage.setItem(key , txt)
    key++
    
    let container1 = document.querySelector('.container1'); // Get the container with class "container1"
    
    if (!container1) {
        container1 = document.createElement("div"); // Create a new <div> element with class "container1" if it doesn't exist
        container1.className = 'container1';
        document.body.appendChild(container1); // Append the container to the body
    }

    let newElement = document.createElement("h3");
    newElement.className = 'txt1';
    newElement.textContent = txt; // Set the text content of the <h3> element to the input value
    container1.appendChild(newElement); // Append the <h3> element to the "container1" div
    
     // Create the "Edit" button
     let editButton = document.createElement("button");
     editButton.textContent = "Edit";
     editButton.className = "btn btn-primary";
     editButton.addEventListener('click', function() {
         let a = localStorage.getItem('key')
         console.log(a)


     });
     
     // Create the "Delete" button
     let deleteButton = document.createElement("button");
     deleteButton.textContent = "Delete";
     deleteButton.className = "btn btn-danger";
     deleteButton.addEventListener('click', function() {
         // Implement your delete logic here
         container1.removeChild(newElement); // Remove the <h3> element when the "Delete" button is clicked
     });
     
     // Append the buttons to the <h3> element
     newElement.appendChild(editButton);
     newElement.appendChild(deleteButton);
     
     // Append the <h3> element with buttons to the container
     container1.appendChild(newElement);
});

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




