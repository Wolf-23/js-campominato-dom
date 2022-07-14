let btnplay = document.getElementById('play');
let grigliaElementi = document.getElementById('grid');
let selectDom = document.getElementById('difficulty');

btnplay.addEventListener('click', function() {
    grigliaElementi.innerHTML = '';
    generateGrid(selectDom.value);
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

    for (x = 1; x <= cicles; x++ ) {
        let mySquare = generateSquare();
        mySquare.append(x);
        mySquare.classList.add(addedClass);
        grigliaElementi.append(mySquare);
        
        changeBgBlue(mySquare);

    }
    
    function changeBgBlue(mysquare) {
        mysquare.addEventListener('click', function() {
            this.classList.toggle('bg_blue');
            console.log(mysquare.innerHTML);
        });
    }
}

function generateSquare() {
    let square = document.createElement('div');
    square.classList.add('square');
    return square;
}

