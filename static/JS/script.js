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

function generateCat () {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
}


