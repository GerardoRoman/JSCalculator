console.log('linked');

const buttons = document.querySelectorAll('.notequals')
// selects everything from html that has 'button'
const screen = document.querySelector('#screen')
// finds element with id of 'screen'
console.log(buttons)


let filledDisplay = [];
// empty array that is going to store what we clicked
for (let button of buttons) {
    button.addEventListener('click', function (event) {
        // waiting for a click to happen before registering anything
        console.log(event.target.innerText)
        // whatever button gets clicked, want to see which button
        let buttonValue = event.target.innerText;
        // setting content equal to a variable
        filledDisplay.push(buttonValue);
        // adding what we clicked to the array
        screen.innerText = filledDisplay.join("");
        // taking everything that's been clicked so far, turning it into a string, and showing it in the display box
    })
}

let equalButton = document.querySelector(`#equals`);
equalButton.addEventListener('click', function (event) {
    // make clicking the equals button evaluate teh expression
    // in the displayScreen and display the solution
    const answer = eval(screen.innerText)
    console.log(answer);
    screen.innerText = answer;
})

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function (event) {
    screen.innerText = ""
    filledDisplay = [];
    // add some sort of "remove"
})