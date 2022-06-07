import cardArray from "./data.js";

// Math.random returns a random number between 0 and 1. 
// So if it happens to give you a number less then 0.5 
// then you get a negative number and if it’s over that then you get a positive.
 // cardArray.sort(() => 0.5 - Math.random())
const containerDisplay = document.querySelector('#cardContainer')
const scoreDisplay = document.querySelector('#score')
let  cardsChosen = []
let cardsChoosenIds = []
const winnerCards = []

function renderBoard() {
  for (let i = 0; i < cardArray.length; i++) {
      const cardImage = document.createElement("img");
      cardImage.setAttribute("src", "images/blank.png");
      cardImage.setAttribute("data-id", i);
      cardImage.addEventListener("click", turnCard);
           
      function turnCard() {
            const cardId = this.getAttribute("data-id", i);
            cardsChosen.push(cardArray[cardId].name);
            cardsChoosenIds.push(cardId);
            this.setAttribute("src", cardArray[cardId].img);
            cardsChosen.length === 2 ? setTimeout(checkImage, 500) : ""
          }
          containerDisplay.appendChild(cardImage);
    }
}

  function checkImage() {
    const cards = document.querySelectorAll('img')
    const cardOneId = cardsChoosenIds[0]
    const cardTwoId = cardsChoosenIds[1]
    // condition ? statement-if-true : statement-if-false;
    cardOneId === cardTwoId ?  alert('you have clicked the same image') : ''
   
    cardOneId ==  cardTwoId ? (alert('you found a match'),
    cards[cardOneId].setAttribute('src', 'images/white.png'),
    cards[ cardTwoId].setAttribute('src', 'images/white.png'),
    cards[cardOneId].removeEventListener('click', turnCard),
    cards[ cardTwoId].removeEventListener('click', turnCard),
    winnerCards.push(cardsChosen))
    : 
    (cards[cardOneId ].setAttribute('src', 'images/blank.png'),
    cards[ cardTwoId].setAttribute('src', 'images/blank.png'),
    alert('sorry try again'))

    cardsChosen = []
    cardsChoosenIds = []    

    winnerCards.length == cardArray.length/2 ? scoreDisplay.textContent = 'you found them all' : 'try again' 
  }

renderBoard()