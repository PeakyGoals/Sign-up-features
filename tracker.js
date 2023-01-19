let totalClicks = 0;
let initTime = Date.now();
let totalKeysPressed = 0;
let totalCharsTyped = 0;

tracking.onclick = function(event) {
    totalClicks++;
}

function signUp() {
    let timePassed = (Date.now()-initTime)/1000;
    let minutes = Math.floor(timePassed / 60);
    let seconds = Math.floor(timePassed % 60);

    let display = document.getElementById("displayData");
    display.innerHTML = "<p>" + minutes + " minutes " + seconds + " seconds  </p>"
     + "<p>" + totalKeysPressed + " keys pressed in text fields  </p>" 
     + "<p>" + totalCharsTyped + " chars typed </p>";
}

function charTyped() {
    totalCharsTyped++;
}

function keyPressed() {
    totalKeysPressed++;
}