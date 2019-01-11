const pressed = [];
const secretCode = 'wesbos';

// Wes's Solution - I don't think the splice method is very elegant.  My solution is dynamic and readable compared to his which isn't readable
/*window.addEventListener('keyup', function(e) {
    // console.log(e.key);
    // max is 6 characters 
    pressed.push(e.key);
    console.log(`pressed.length: ${pressed.length} - secretCode.length: ${secretCode.length} = ${pressed.length - secretCode.length}`);
    
    pressed.splice(0, pressed.length - secretCode.length);
    console.log(pressed);
    
})*/

// More readable code 
window.addEventListener('keyup', function(e) {
    pressed.push(e.key);
    if (pressed.length > secretCode.length) {
        pressed.shift();
    }
    if (pressed.join('') === secretCode) {
        console.log('OMG EASTER EGG!!');
        cornify_add();
    }
})