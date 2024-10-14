var typed = new Typed(".auto-type", {
  strings: ["Sigma - DSA + Web Development", "C++ DSA", "Alpha - DSA"],
  typeSpeed: 100,
  backSpeed: 110,
  loop: true
})


// auto counting

let valueDisplays = document.querySelectorAll(".num");
let interval = 2000;


function startCounting(displayElements, incrementValue) {
  displayElements.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
          startValue += incrementValue;
          valueDisplay.textContent = startValue;
          if (startValue >= endValue) {
              clearInterval(counter);
          }
      }, duration);
  });
}

startCounting(document.querySelectorAll(".num"), 8000);
startCounting(document.querySelectorAll(".num1"), 1);
startCounting(document.querySelectorAll(".num2"), 500);


// valueDisplays.forEach((valueDisplay) => {
//   let startValue = 0;
//   let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(function () {
//     startValue += 8000;
//     valueDisplay.textContent = startValue;
//     if (startValue == endValue) {
//       clearInterval(counter);
//     }
//   }, duration);
// });

// let valueDisplays1 = document.querySelectorAll(".num1");

// valueDisplays1.forEach((valueDisplay1) => {
//   let startValue = 0;
//   let endValue = parseInt(valueDisplay1.getAttribute("data-val"));
//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(function () {
//     startValue += 1;
//     valueDisplay1.textContent = startValue;
//     if (startValue == endValue) {
//       clearInterval(counter);
//     }
//   }, duration);
// });

// let valueDisplays2 = document.querySelectorAll(".num2");

// valueDisplays2.forEach((valueDisplay2) => {
//   let startValue = 0;
//   let endValue = parseInt(valueDisplay2.getAttribute("data-val"));
//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(function () {
//     startValue += 500;
//     valueDisplay2.textContent = startValue;
//     if (startValue == endValue) {
//       clearInterval(counter);
//     }
//   }, duration);
// });

// auto counting end here

// auto join js start here

var typed = new Typed(".random", {
  strings: ["#youtube", "#instagram", "#telegram"],
  typeSpeed: 110,
  backSpeed: 110,
  loop: true
})