/*
This approach won't work b/c I'll be creating TWO event listeners when I press the ArrowUp key a second time
function konami(e) {
    
}

function testKeyArrowUp(e) {
    // console.log(e.key);
    if (e.key == 'ArrowUp') {
        window.addEventListener('keyup', konami)
    }
}

window.addEventListener('keyup', testKeyArrowUp)*/

// Simple Konami event listener
let keyStrokes = [];
let sequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
window.addEventListener('keyup', (e) => {keyStrokes.push(e.key)});
window.addEventListener('keyup', () => {
    let n = keyStrokes.length;
    console.log(keyStrokes.slice(n-10, n+1));
    let lastTen = keyStrokes.slice(n-10, n+1);
    if (sequence.join('') == lastTen.join('')) {
        console.log('IGNITION!!');
    }
})
