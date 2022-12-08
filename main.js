// Create input text

let inputText = document.createElement("input");
inputText.setAttribute("type", "text");
inputText.setAttribute("value", "");

document.getElementById("body").appendChild(inputText);

// Create button

let button = document.createElement("button");
let textButton = document.createTextNode("Cliquez ici!");
button.appendChild(textButton);

document.getElementById("body").appendChild(button);


// Function

function textInput() {
    if (inputText.value == "") {
        alert("Le champ est vide");
        console.log("if");
    }
    else {
        inputText.select();
        console.log("else");
    }
}

// Add function to button

button.setAttribute("OnClick", "textInput()");

