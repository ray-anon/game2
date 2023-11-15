const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

let choosenCard = [];
let choosenCardId = [];
let count = 0;
cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector(".grid");

createBoard();
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("id", i);
    gridDisplay.appendChild(card);
    card.addEventListener("click", flipCard);
  }
}

function flipCard() {
  const cardId = this.id;
  this.setAttribute("src", cardArray[cardId].img);
  choosenCard.push(cardArray[cardId].name);
  choosenCardId.push(cardId);
  if (choosenCard.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  let cards = document.querySelectorAll("img");
  let result = document.querySelector(".result");
  let optionOneId = choosenCardId[0];
  let optionTwoId = choosenCardId[1];
  if (choosenCard[0] == choosenCard[1] && optionOneId != optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    count++;
    result.innerText = count;
    if (count == 6) {
      alert("you won the game bro");
    }
  } else {
    cards[choosenCardId[0]].setAttribute("src", "images/blank.png");
    cards[choosenCardId[1]].setAttribute("src", "images/blank.png");
  }
  choosenCard = [];
  choosenCardId = [];
}
