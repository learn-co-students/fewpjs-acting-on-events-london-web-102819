let dodger = document.getElementById("dodger");
let game = document.getElementById("game");

dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let dodgerLeftSide = parseInt(leftNumbers, 10);

  if (dodgerLeftSide > 0) {
    dodger.style.left = `${dodgerLeftSide - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let dodgerLeftSide = parseInt(leftNumbers, 10);
  let dodgerRightSide = dodgerLeftSide + dodger.clientWidth

  // if (dodgerRightSide < game.clientWidth) {
  //   dodger.style.left = `${dodgerLeftSide + 1}px`;
  // }

  dodger.style.left = `${dodgerLeftSide + 1}px`;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  };
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
