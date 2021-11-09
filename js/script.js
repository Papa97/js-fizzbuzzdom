const cont = document.querySelector('.container');

for (let i = 1; i <= 50; i++) {
    if ( i % 3 ==  0 && i % 5 == 0){
    cont.innerHTML += `<div class = "box red">fizzbuzz </div>`
    }
    else if ( i % 3 == 0 ){
    cont.innerHTML += `<div class = "box green">fizz</div>`
    } else if (i % 5 == 0) {
    cont.innerHTML += `<div class = "box yellow">buzz</div>`
    }
    else {
    cont.innerHTML += `<div class = "box blue">${i}</div>`;
    }
}

