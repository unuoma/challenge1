//challenge 1: Age in days
function ageInDays(){
    var birthYear = prompt('what year were you born?');
    var ageIDayz = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageIDayz + ' days old.');
    h1.setAttribute('id', 'ageInDayz');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDayz').remove();
}
//Cat generator
function generateCat () {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}

//RPS challenge 3
function rpsGame(yourChoice) {
    console.log(yourChoice);

    let humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randomRPSInt());
    console.log('Computer choice:', botChoice);

    results = decideWinner(humanChoice, botChoice); //[o, 1] human lost | bot won
    console.log(results);

    message = finalMessage(results); // {'message': 'you won!', 'color': 'green'}
    console.log(message)
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomRPSInt() {
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(yourChoice, botChoice) {
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'scissors': 0, 'rock': 1, 'paper': 0.5},
        'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1},
    }
    let yourScore = rpsDatabase[yourChoice][botChoice];
    let computerScore = rpsDatabase[botChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if(yourScore === 0) {
        return {'message': 'you lost!', 'color': 'red'};
    }  else if (yourScore === 0.5) {
        return {'message': 'you tied!', 'color': 'yellow'};
    } else {
        return {'message': 'you Won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImage, botImage, finalMessage) {
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImage] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233,1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImage] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

//challenge 4 - color buttons
let all_buttons = document.getElementsByTagName('button');

let copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
    console.log(copyAllButtons);
}


function buttonColorChange (buttonThing) {
    if (buttonThing.value === 'Red') {
        buttonsRed();
    } else if (buttonThing.value === 'Green') {
        buttonsGreen();
    } else if (buttonThing.value === 'Reset') {
        buttonColorReset();
    } else if (buttonThing.value === 'Random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    let choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"]
    for (let i=0; i < all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber])
    }
}

