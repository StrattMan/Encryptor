
let message = "Lincoln, Quincy, and Stratton gave McCloud a hug. yey!";
let userMessageInput = document.getElementById("messageInput");
let newMessage = '';
let stringArray = []; // new array to loop that keeps the spaces
let outputDiv = document.getElementById("output");
let encryptNumber; // the number of letter up from the current index
let numberChosen = prompt("what number would you like to encrypt by?"); 


let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log(`At index 1: ${message.charAt(0)}`);

console.log(`They chose: ${message}`);

function chooseNumber(){
    let numberChosen = ''; 
}

function getMessage() {
        message = userMessageInput.value;
        newMessage = '';
        stringArray = [];
}

function encrypt() {

    // get message from UI
    getMessage();

    // loop over all letters in the message

    message = message.split(" ");

    // loop the wards are the array and add them to the new array, adding a space after each word
    message.forEach((l, i) => {
        stringArray.push(l);
        if (i !== message.length - 1) {
            stringArray.push(" ");
        }
    });

    stringArray.forEach((word) => {
        if (word !== " ") {
            loopString(word);
        } else {
            newMessage += '&nbsp;'
        }

    });

    // change each letter to be 3 letters past it in the alphabet

    // add that to the "newMessage" variable

    // add newMessage to the output div

    outputDiv.innerHTML = newMessage;



}


function loopString(stringToLoop) {

    stringToLoop.split('').forEach(l => {

        // find the index of the letter in the alphabet array
        let alphaIndex = alphabet.indexOf(l.toLowerCase());

        
        
        encryptNumber = parseInt(numberChosen); 

        // if it's found add to the newMessage
        if (alphaIndex !== -1) {
            if((alphaIndex + 1 + encryptNumber) > alphabet.length){
                alphaIndex = alphabet.length - alphaIndex - encryptNumber - 1; 
            }
            newMessage += alphabet[alphaIndex + encryptNumber];
            // if not if add a what it found
        } else {
            newMessage += l;
        }


    });

}


let stratton = 'awesome';