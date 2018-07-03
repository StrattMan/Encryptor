//TODO figure out how to make the message something that the user puts into the input box.
let message = "Lincoln, Quincy, and Stratton gave McCloud a hug. yey!";
let newMessage = '';
let stringArray = []; // new array to loop that keeps the spaces
let outputDiv = document.getElementById("output");
let encryptNumber; // the number of letter up from the current index

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log(`At index 1: ${message.charAt(0)}`);

console.log(`They chose: ${message}`);


function encrypt() {

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

// TODO this is not keeping special characters like it should.  i.e. ",", "!", etc..
function loopString(stringToLoop) {

    stringToLoop.split('').forEach(l => {

        // find the index of the letter in the alphabet array
        let alphaIndex = alphabet.indexOf(l.toLowerCase());

        // TODO figure out what happens if they get past z
        encryptNumber = 3;

        // if it's found add to the newMessage
        if (alphaIndex !== -1) {
            if((alphaIndex + 1 + encryptNumber) > alphabet.length){
                alphaIndex = alphabet.length - alphaIndex - 1; 
            }
            newMessage += alphabet[alphaIndex + encryptNumber];
            // if not if add a what it found
        } else {
            newMessage += l;
        }


    });

}


let stratton = 'awesome';