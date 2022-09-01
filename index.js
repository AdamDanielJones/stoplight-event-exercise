(function() {
  'use strict';

  // YOUR CODE HERE
  let redButton = document.getElementById("stopButton")
  let stopLight = document.getElementById("stopLight")
  redButton.addEventListener("click", () => {
    stopLight.classList.toggle("stop")
    if (stopLight.classList.contains("stop")){
      console.log("Red bulb on")
    }
    else {
      console.log("Red bulb off")
    }
  })
  redButton.addEventListener("mouseenter", () => {
    console.log(`Entered red button`)
  })
  redButton.addEventListener("mouseleave", () => {
    console.log(`Left red button`)
  })
  let yellowButton = document.getElementById("slowButton")
  let slowLight = document.getElementById("slowLight")
  yellowButton.addEventListener("click", () => {
    slowLight.classList.toggle("slow")
    if (slowLight.classList.contains("slow")){
      console.log("Yellow bulb on")
    }
    else {
      console.log("Yellow bulb off")
    }
  })
  yellowButton.addEventListener("mouseenter", () => {
    console.log(`Entered yellow button`)
  })
  yellowButton.addEventListener("mouseleave", () => {
    console.log(`Left yellow button`)
  })
  let greenButton = document.getElementById("goButton")
  let goLight = document.getElementById("goLight")
  greenButton.addEventListener("click", () => {
    goLight.classList.toggle("go")
    if (goLight.classList.contains("go")){
      console.log("Green bulb on")
    }
    else {
      console.log("Green bulb off")
    }
  })
  greenButton.addEventListener("mouseenter", () => {
    console.log(`Entered green button`)
  })
  greenButton.addEventListener("mouseleave", () => {
    console.log(`Left green button`)
  })
})();
