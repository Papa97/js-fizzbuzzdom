const cont = document.querySelector('.container');

const a = ('fizz');
const b = ('buz');

for (let i = 1; i <= 50; i++) {
    if ( i % 3 ==  0 && i % 5 == 0){
    cont.innerHTML += `<div class = "box red">${a + b }</div>`
    }
    else if ( i % 3 == 0 ){
    cont.innerHTML += `<div class = "box green">${a}</div>`
    } else if (i % 5 == 0) {
    cont.innerHTML += `<div class = "box yellow">${b}</div>`
    }
    else {
    cont.innerHTML += `<div class = "box blue">${i}</div>`;
    }
}

