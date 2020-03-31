const btnScisors = document.querySelector('.scisors');
const btnStone = document.querySelector('.stone');
const btnPaper = document.querySelector('.paper');
let draw = 0;
let won = 0;
let lost = 0;
let nrGame = 0;


let yourChoice = document.querySelector('.yourChoice');
yourChoice.textContent = `Wybór gracza: `;
let compChoice = document.querySelector('.compChoice');
compChoice.textContent = `Wybór komputera: `;
let gameNumber = document.querySelector('.numberGame');
gameNumber.textContent = `Gra nr: ${nrGame} `;
let wons = document.querySelector('.wons');
wons.textContent = `Wygrane: ${won}`;
let loses = document.querySelector('.loses');
loses.textContent = `Przegrane: ${lost}`;
let draws = document.querySelector('.draws');
draws.textContent = `Remisy: ${draw}`;


btnScisors.addEventListener('click', () => {
    yourChoice.textContent = `Wybór gracza: nożyczki`;
    let index = Math.floor(Math.random() * 3)
    switch (index) {
        case 0:
            compChoice.textContent = `Wybór komputera: nożyczki `;
            gameNumber.textContent = `Gra nr: ${++nrGame} `;
            draws.textContent = `Remisy: ${++draw}`;

            break;
        case 1:
            compChoice.textContent = `Wybór komputera: kamień `;
            gameNumber.textContent = `Gra nr: ${++nrGame} `;
            loses.textContent = `Przegrane: ${++lost}`;
            break;

        case 2:
            compChoice.textContent = `Wybór komputera: papier `;
            gameNumber.textContent = `Gra nr: ${++nrGame} `;
            wons.textContent = `Wygrane: ${++won}`;
            break;

    }
})

btnStone.addEventListener('click', () => {
    yourChoice.textContent = `Wybór gracza: kamień`;
    let index = Math.floor(Math.random() * 3)
    switch (index) {
        case 0:
            compChoice.textContent = `Wybór komputera: nożyczki `;
            gameNumber.textContent = `Gra nr: ${++nrGame} `;
            wons.textContent = `Wygrane: ${++won}`;

            break;
        case 1:
            compChoice.textContent = `Wybór komputera: kamień `;
            gameNumber.textContent = `Gra nr: ${++nrGame} `;
            draws.textContent = `Remisy: ${++draw}`;
            break;

        case 2:
            compChoice.textContent = `Wybór komputera: papier `;
            gameNumber.textContent = `Gra nr: ${++nrGame} `;
            loses.textContent = `Przegrane: ${++lost}`;
            break;

    }
})

btnPaper.addEventListener('click', () => {
    yourChoice.textContent = `Wybór gracza: papier`;
    let index = Math.floor(Math.random() * 3)
    switch (index) {
        case 0:
            compChoice.textContent = `Wybór komputera: nożyczki `;
            gameNumber.textContent = `Gra nr: ${++nrGame} `;
            loses.textContent = `Przegrane: ${++lost}`;

            break;
        case 1:
            compChoice.textContent = `Wybór komputera: kamień `;
            gameNumber.textContent = `Gra nr: ${++nrGame} `;
            wons.textContent = `Wygrane: ${++won}`;
            break;

        case 2:
            compChoice.textContent = `Wybór komputera: papier `;
            gameNumber.textContent = `Gra nr: ${++nrGame} `;
            draws.textContent = `Remisy: ${++draw}`;
            break;

    }
})