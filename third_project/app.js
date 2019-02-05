/* Select DOM elements and define variables */
let sequence = ["ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "ArrowUp", "ArrowDown", "b", "a", "Enter"];
let keysPressed = [];


/* Define functions */
function konamiSequence(e) {
    // console.log(e.key);
    keysPressed.push(e.key);
    // want to keep its length at 11 
    //keysPressed.splice(sequence.length, 1);
    if (keysPressed.length > sequence.length) {
        keysPressed.shift();
    }
    console.log(keysPressed);
    if (keysPressed.join('') == sequence.join('')) {
        console.log('KONAMIIII!');
    }
}

// Wes function

window.addEventListener('keydown', konamiSequence);