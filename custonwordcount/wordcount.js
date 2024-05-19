

class gettingIdDOM {
  constructor(id) {
    this.id = document.getElementById(id);
    // console.log(this.id)
  }


  hide() {
    this.id.style.display = 'none';
  }

  show() {
    this.id.style.display = 'block';
  }

}

document.addEventListener('DOMContentLoaded', function () {
  const textArea = document.getElementById('textArea');

  // console.log(textArea)
  const elementsToToggle = [
    //  new gettingIdDOM('tableCreated'),
    new gettingIdDOM('textArea2'),
    new gettingIdDOM('upperCase'),
    new gettingIdDOM('lowerCase'),
    new gettingIdDOM('sentanceID'),
    new gettingIdDOM('capitalizeButton'),
    new gettingIdDOM('headerCase'),
    new gettingIdDOM('headerCaseLower'),
    new gettingIdDOM('copy-button'),
    new gettingIdDOM('characterCountt'),
    new gettingIdDOM('wordCountt'),
    new gettingIdDOM('lineCountt'),
    new gettingIdDOM('paragraphCountt'),
    new gettingIdDOM('clear'),
    new gettingIdDOM('results')
    
  ];
  textArea.addEventListener('input', function () {
    let textArea2 = document.getElementById('textArea2');
    textArea2.value = textArea.value;
    if (textArea.value.length > 0) {
      elementsToToggle.forEach(element => element.show());

    } else {
      elementsToToggle.forEach(element => element.hide());
    }
  });
});
let textArea2 = document.getElementById('textArea2');
let copy = document.getElementById('copy-button');
copy.addEventListener('click', function () {
  if (textArea2.value.length > 0) {
    navigator.clipboard.writeText(textArea2.value)
      .then(function () {
        // console.log('Text copied to clipboard');
      })
      .catch(function (error) {
        // console.error('Failed to copy text:', error);
      });
  }
});


document.addEventListener('DOMContentLoaded', function () {
  let textArea = document.getElementById('textArea');
  let characterCount = document.getElementById('characterCount');
  let wordCount = document.getElementById('wordCount');
  let paragraphCount = document.getElementById('paragraphCount');

  textArea.addEventListener('keyup', function () {
    let text = textArea.value;
    characterCount.textContent = text.length;


    let words = text.trim().split(/\s+/).filter(function (word) {
      return word !== '';
    });
    wordCount.textContent = words.length;


    textArea.addEventListener('input', function () {
      let text = textArea.value;
      let lines = text.split(/[.?]/);
      lineCount.textContent = lines.length - 1;


      textArea.addEventListener('input', function () {
        let text = textArea.value;
        let paragraph = text.split(/\r\n|\r|\n/); // Split

        if (text.length > 0) {
          paragraphCount.textContent = paragraph.length;

        }
        else {
          paragraphCount.textContent = 0;
        }


      });
    });

  });
});
function clearText() {
  document.getElementById("textArea").value = "";
  document.getElementById("characterCount").textContent = "0";
  document.getElementById("wordCount").textContent = "0";
  document.getElementById("lineCount").textContent = "0";
  document.getElementById("paragraphCount").textContent = "0";
  document.getElementById("textArea2").value = "";
  document.getElementById("tbody").value = "";

}
function upperCase() {
  let text = document.getElementById("textArea2");
  let text2 = text.value.toUpperCase();
  text.value = text2;
}
function lowerCase2(sentence) {
  return sentence
    .split(/[ -]/)
    .map(word => word.charAt(0).toLowerCase() + word.slice(1))
    .join('-');
}
function headerCaseLower() {
  let text = document.getElementById("textArea2").value;

  let text2 = lowerCase2(text)
  document.getElementById("textArea2").value = text2;

}
function lowerCase() {
  let text = document.getElementById("textArea2");
  let text2 = text.value.toLowerCase();
  text.value = text2;
}
function sentance() {
  let textArea = document.getElementById('textArea2');
  let line = document.getElementById("lineCount");
  let text = textArea.value;
  let sentences = text.split(/[.?]/);
  let first_letter = sentences.map(function (sentence) {
    return sentence.trim().charAt(0).toUpperCase() + sentence.trim().slice(1);
  });
  let change_array = first_letter.join('. ');
  textArea.value = change_array;

  let count = first_letter.length;
  line.textContent = count;
}
function capitalizeWords(sentence) {
  return sentence
    .split(/[ -]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
function headerWords(sentence) {
  return sentence
    .split(/[ -]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');
}

function capitalizeText() {
  let textArea = document.getElementById('textArea2');
  const originalSentence = textArea.value;
  const capitalizedSentence = capitalizeWords(originalSentence);
  textArea.value = capitalizedSentence;
}
function headerCase() {
  let textArea = document.getElementById('textArea2');
  const originalSentence = textArea.value;
  const capitalizedSentence = headerWords(originalSentence);
  textArea.value = capitalizedSentence;

}
let container = document.getElementById("container1");
let elem1 = document.getElementById("value");
let tableCreated = false; // Flag to check if the table has been created
let table; // Reference to the table element
let textArea = document.getElementById('textArea');
textArea.addEventListener('input', function () {
    let inputText = textArea.value;
    let wordDensity = calculateWordDensity(inputText);
    if (!tableCreated) {
        table = document.createElement('table');
        table.className = 'density';
        table.style.maxHeight = '625px';
        // Create the table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headerKeyCell = document.createElement('th');
        headerKeyCell.textContent = 'Word';
        const headerValueCell = document.createElement('th');
        headerValueCell.textContent = 'Density';
        headerRow.appendChild(headerKeyCell);
        headerRow.appendChild(headerValueCell);
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create the table body
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);

        // Wrap the table in a container with a fixed height and overflow-y
        const tableContainer = document.createElement('div');
        tableContainer.className = 'table-container';
        tableContainer.style.maxHeight = '625px'; // Adjust the height as needed
        tableContainer.style.overflowY = 'auto';
        tableContainer.appendChild(table);

        elem1.appendChild(tableContainer);
        tableCreated = true; // Set the flag to true to indicate the table has been created
    }
    // Update the table body with new data
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = ''; // Clear existing rows
    for (const [key, value] of Object.entries(wordDensity)) {
        const row = document.createElement('tr');
        const keyCell = document.createElement('td');

        keyCell.textContent = key;
        const valueCell = document.createElement('td');
        valueCell.textContent = value;
        row.appendChild(keyCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
    }
});


function calculateWordDensity(text) {
  if (text !== "") {
    const cleanedText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
    const words = cleanedText.split(/\s+/);
    const wordFrequency = {};

    words.forEach(word => {
      if (wordFrequency[word]) {
        wordFrequency[word]++;
      } else {
        wordFrequency[word] = 1;
      }
    });

    return wordFrequency;
  }
}

let text = document.getElementById('textArea');

let resultElement = document.getElementById('result');

const calculateReadingTime = () => {
    let text1 = text.value
    console.log(text1);
    const words = text1.split(/\s+/).filter(word => word !== ''); // Split text into words

    // Average reading speed in words per minute (adjust as needed)
    const wordsPerMinute = 200;

    // Calculate reading time
    const readingTime = Math.ceil(words.length / wordsPerMinute);

    resultElement.textContent = ` ≈${readingTime}`;
};

// Attach the event listener to the textarea's 'input' event
textArea.addEventListener('keyup', calculateReadingTime);

// Add event listeners to FAQ buttons
document.querySelectorAll('.btn[data-toggle="collapse"]').forEach(button => {
  button.addEventListener('click', function () {
    const icon = button.querySelector('i');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-right');
  });
});

