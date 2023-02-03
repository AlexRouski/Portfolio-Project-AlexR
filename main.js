// const tennisGame = document.querySelectorAll('.btn')[0]
// const bricksGame = document.querySelectorAll('.btn')[1]

// Destructing method:
const [tennisGame, bricksGame] = document.querySelectorAll('.btn')

// set common things out of ternery operator.
let openGame = event => window.open(event.target === tennisGame ? './assets/tennis.html' : './assets/BrickGame.html');

// let openGame = event => event.target === tennisGame ? window.open('./assets/tennis.html') : window.open('./assets/BrickGame.html')

tennisGame.addEventListener('click', openGame)
bricksGame.addEventListener('click', openGame)

// functions to enlarge and reset images:
const images = document.querySelectorAll('div.screenshot > img')

function enlargeImages(event) {
    event.target.style.transform = 'scale(1.75)';
    event.target.style.transition = 'transform 0.25s ease'
}

let resetImages = event => {
    event.target.style.transform = '';
    event.target.style.transition = 'transform 0.25s ease'
}

images.forEach(el => el.addEventListener('mouseover', enlargeImages))
images.forEach(el => el.addEventListener('mouseout', resetImages))
