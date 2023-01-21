// variables that keep track of click, time passed, keys pressed, and characters typed, respectively
let totalClicks = 0;
let initTime = Date.now();
let totalKeysPressed = 0;
let totalCharsTyped = 0;

// when you click sign up, displays all tracking data in a div
function signUp() {
    let timePassed = (Date.now()-initTime)/1000; // get current time
    let minutes = Math.floor(timePassed / 60); // find minutes passed
    let seconds = Math.floor(timePassed % 60); // find seconds passed

    let display = document.getElementById("displayData"); // retrieve the hidden div
    display.innerHTML = "<p>" + minutes + " minutes " + seconds + " seconds  </p>"
     + "<p>" + totalKeysPressed + " keys pressed in text fields  </p>" 
     + "<p>" + totalCharsTyped + " chars typed </p><p>"+ totalClicks +" clicks made</p>"; 
     // fills div with the text containing tracking data
}

// increase mouse click tracker
tracking.onclick = function(event) {
    totalClicks++;
}

// increase character tracker
function charTyped() {
    totalCharsTyped++;
}

// increase key tracker
function keyPressed() {
    totalKeysPressed++;
}