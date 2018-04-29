var counter = 0;
var counterDisplay = document.getElementById("counter");

setInterval(function() {
  fetch("http://ads.example.com");
  counterDisplay.innerHTML = counter++;
}, 5);
