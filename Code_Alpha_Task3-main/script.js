// Declaring variables
var body = document.getElementById("gradient");
var button = document.getElementById("randomize");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

// Function to randomize colors
function randomizeColors() {
    color1.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    color2.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

// Function to set new gradient values
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = "CSS Background Value: " + body.style.background + ";";
}

// Adjusting gradient based on color1 value
color1.addEventListener("input", setGradient);

// Adjusting gradient based on color2 value
color2.addEventListener("input", setGradient);

// Display initial value of gradient
window.addEventListener("load", randomizeColors);
window.addEventListener("load", setGradient);

// Randomizing the gradient via button
button.addEventListener("click", randomizeColors);
button.addEventListener("click", setGradient);
