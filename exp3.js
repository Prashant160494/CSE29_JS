let heading = document.getElementById("heading");
let para = document.getElementById("para");

document.getElementById("changeText").addEventListener("click", function() {
    let text = document.getElementById("inputText").value;
    heading.textContent = text;
});

document.getElementById("changeColor").addEventListener("click", function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let randomColor = "rgb(" + r + "," + g + "," + b + ")";

    document.body.style.backgroundColor = randomColor;
});

document.getElementById("increaseFont").addEventListener("click", function() {
    heading.style.fontSize = "40px";
});

document.getElementById("togglePara").addEventListener("click", function() {
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
});