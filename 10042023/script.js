"use strict";

const slider = document.getElementById("slider");
const input = document.createElement("input");
input.setAttribute("type", "range");
input.setAttribute("min", "0");
input.setAttribute("max", "100");
input.setAttribute("value", "50");
input.setAttribute("step", "0.1");
input.setAttribute("class", "slider");

slider.appendChild(input);

input.addEventListener("input", function() {
  console.log(this.value); 
});