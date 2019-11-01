const cards = document.querySelectorAll(".cardContainer");

let fliped = false;
let firstCard, secondCard;
let lock = false;

function flipCard() {
  if (lock) return;
  if (this === firstCard) return;
  this.classList.add("flip");
  if (!fliped) {
    // console.log(fliped);
    fliped = true;
    firstCard = this;
    // console.log(firstCard, fliped);
    // firstCard.removeEventListener("click", flipCard);
    return;
  }
  secondCard = this;
  checkMacth();
}
const checkMacth = () => {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCard();
  } else {
    flipBack();
  }
};

const disableCard = () => {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  reset();
};
const flipBack = () => {
  lock = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500);
};
const reset = () => {
  [fliped, lock] = [false, false];
  [firstCard, secondCard] = [null, null];
};
(function shuffle() {
  cards.forEach(card => {
    let random = Math.floor(Math.random() * 12);
    card.style.order = random;
  });
})();
cards.forEach(card => card.addEventListener("click", flipCard));
