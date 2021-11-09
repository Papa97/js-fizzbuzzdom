const cont = document.querySelector('.container');

const firstWord = 'fizz';
const secodnWord = 'buz';

for (let i = 1; i <= 50; i++) {
    if ( i % 3 ==  0 && i % 5 == 0){
    cont.innerHTML += `<div class = "box red">${firstWord + secodnWord }</div>`
    }
    else if ( i % 3 == 0 ){
    cont.innerHTML += `<div class = "box green">${firstWord}</div>`
    } else if (i % 5 == 0) {
    cont.innerHTML += `<div class = "box yellow">${secodnWord}</div>`
    }
    else {
    cont.innerHTML += `<div class = "box blue">${i}</div>`;
    }
}

