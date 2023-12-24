/* generateCode function that uses a string*/

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';               // array with all letters in the alphabet
const numLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';  // array with all letters and numbers
const $displayNumber = document.createElement('h1')         // creating element H1
$displayNumber.textContent = 'Hello'                        // <h1>Hello</h1>
document.body.appendChild($displayNumber)                   // appending h1 to the body

function generateCode(num = 6, value = false){              //function with default parameters
    let stringOutput = '';                                  // string that will be displayed
    for(let i = 0; i < num; i++){                           // loop to create characters
        if(value === false){
            const index = getRandomInt(letters.length)      //function to get a number from 0 to the length of 'letters' (26)
            stringOutput += letters[index];                 // this line is adding a character randomized from letters to the stringOutput.
        } else { 
            const index = getRandomInt(numLetters.length)   // function to get a number from 0 to the length of 'numLetters' (36)
            stringOutput += numLetters[index];              // this line is adding a character randomized from numLetters to the stringOutput.
        }
    }
    $displayNumber.textContent = stringOutput               // changes the content of $displayNumber to the string created
    return stringOutput
}

function getRandomInt(num){                                 // function to get a random number 
    const index = Math.floor(Math.random() * num);
    return index
}

/* generateCode function that uses UTF 16 characters */

function generateCode2(num = 6, value = false){             // function with default parameters
    let stringOutput = '';                                  // string that will be displayed
    for(let i = 0; i < num; i++){                           // loop to create characters
        let charUTF
        const numberOrLetter = Math.floor(Math.random() * 2) // this will return 1 or 0 to be used in 'else if' statement
        if(value === false){ 
            charUTF = getRandomNum(65, 90)                  // will generate a random number between 65 and 90
            charUTF = String.fromCodePoint(charUTF);        // will transform the number to the UTF16 character
            stringOutput += charUTF;                        // adds the UTF16 character to the string that will be displayed
        } else if (numberOrLetter == 0){                    // if the variable == 0, it will return a letter
            charUTF = getRandomNum(65, 90)
            charUTF = String.fromCodePoint(charUTF);
            stringOutput += charUTF;                        // adds the UTF16 character to the string that will be displayed
        } else if (numberOrLetter == 1){                    // if the variable == 1, it will return a number
            charUTF = getRandomNum(48, 57)
            charUTF = String.fromCodePoint(charUTF);
            stringOutput += charUTF;                        // adds the UTF16 character to the string that will be displayed
            }
        }
    $displayNumber.textContent = stringOutput               // changes the content of $displayNumber to the string created
    return stringOutput
}

function getRandomNum(min, max) {                           //function to get a number between the numbers inserted as parameters
    const range = max - min + 1;
    const randomNumber = Math.floor(Math.random() * range);
    const result = min + randomNumber;
    return result;
}
