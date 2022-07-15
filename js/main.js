let btnplay = document.getElementById('play');
let grigliaElementi = document.getElementById('grid');
let selectDom = document.getElementById('difficulty');
let punteggio = document.getElementById('punteggio');
let bombs = [];

btnplay.addEventListener('click', function() {
    grigliaElementi.innerHTML = '';
    punteggio.innerHTML = '';
    generateGrid(selectDom.value);
    count = 1;
    playing = true;
});
        
function generateGrid(level) {
    let addedClass = '';
    let cicles;
    switch (level) {

        case 'facile':
        default:
            cicles = 100;
            addedClass = 'wh-10';
        break;
        case 'media':
            cicles = 81;
            addedClass = 'wh-9';
        break;
        case 'difficile':
            cicles = 49;
            addedClass = 'wh-7';
        break;
    }

    bombs = [];
    
    for (let i = 1; i <= 16; i++) {
        const generateBombs = generateRandomNum(bombs, 1, cicles);
        bombs.push(generateBombs);
    }
    
    console.log(bombs);
    
    for (let x = 1; x <= cicles; x++ ) {
        let mySquare = generateSquare();
        mySquare.append(x);
        mySquare.classList.add(addedClass);
        grigliaElementi.append(mySquare);
        
        changeBg(mySquare);
        
    }
}

let count = 0;
let playing = true;
function changeBg(mysquare) {
    mysquare.addEventListener('click', function() {
        if (playing) {
            if (bombs.includes(parseInt(mysquare.innerHTML))) {
                this.classList.add('bg_red');
                playing = false;
                punteggio.innerHTML = `<h2>Hai perso!! Il tuo Punteggio è: ${count - 1} </h2>`;

            } else{
                this.classList.add('bg_blue');
                punteggio.innerHTML = `<h2>Il tuo Punteggio è: ${count++} </h2>`;
            }
            
        } 
            
        console.log(mysquare.innerHTML);
        
    });
}

function generateSquare() {
    let square = document.createElement('div');
    square.classList.add('square');
    return square;
}

function generateRandomNum(numeriUsati, min, max) {
    let validNum = false;
    let randomNum;
    while (!validNum) {
        randomNum = Math.floor(Math.random() * ( max - min + 1)) + min;

        if (numeriUsati.includes(randomNum) == false) {
            validNum = true;
        }
    }
    return randomNum;
}
