// Your code here

let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "yellow";

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0 && left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}



function moveDodgerUp() {
    let topNumbers = dodger.style.top.replace("px", "");
    let top = parseInt(topNumbers, 10);

    if (top > 0) {
        dodger.style.top = `${top - 1}px`;
    }
}

function moveDodgerDown() {
    let topNumbers = dodger.style.top.replace("px", "");
    let top = parseInt(topNumbers, 10);

    if (top > 0 && top < 380) {
        dodger.style.top = `${top + 1}px`;
    }
}




document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})

document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowUp") {
        moveDodgerUp()
    }
})

document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowDown") {
        moveDodgerDown()
    }
})

