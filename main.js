console.log('linked');

const buttons = document.querySelectorAll('button')
const screen = document.querySelector('#screen')
console.log(buttons)

const fullScreen = [];
for (let button of buttons) {
    button.addEventListener('click', function (event) {
        console.log(event.target.innerText)
        let buttonValue = event.target.innerText
        fullScreen.push(buttonValue);
        screen.innerText = fullScreen.join("");
    })
}
