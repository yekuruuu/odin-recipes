// RGB colors for squares

function changeColor () {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + R + "," + G + "," + B + ")";
    return randomColor;
}

// Padding function for squares

function changePadding () {

}

// Total function which fill container

function numberSquares (number) {

    // Get padding size

    let sizePadding = 640 / (number * 2) + "px";
    let changePadding = "" + sizePadding + "";

    // Choose container

    let container = document.querySelector(".container");

    // Delete previous squares

    while (container.hasChildNodes() === true) {
            let checkDiv = document.querySelector(".gridDiv");
            container.removeChild(checkDiv);
    }

    // Create new squares with styles

    let a = 0;
    let squares = number * number;
    while(a != squares) {
        a++;
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        gridDiv.addEventListener("mouseenter", () => {
        gridDiv.style.backgroundColor = changeColor();
        });
        gridDiv.style.padding = changePadding;
        container.appendChild(gridDiv);
        console.log(container.hasChildNodes());
    }
}
     

// Button with event listener

let squareBtn = document.querySelector("button")
squareBtn.addEventListener("click", () => {
    
    numberSquares(prompt());

});
