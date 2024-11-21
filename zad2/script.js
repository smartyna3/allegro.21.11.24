let count = 0;
let isBlack = true;
function increase() {
    count++;
    document.getElementById('number').textContent = count;
}
function changeColor() {
    if (isBlack) {
        document.getElementById('number').style.color = "#ff0000";
        isBlack = !isBlack;
    }
    else {
        document.getElementById('number').style.color = "#000000";
        isBlack = !isBlack;
    }
}


