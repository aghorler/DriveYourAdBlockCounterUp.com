var counter = 0;
var counterDisplay = document.getElementById("counter");
var goButton = document.getElementById("go");
var goCheckbox = document.getElementById("consent");

function go(){
  if(goCheckbox.checked){
    goButton.disabled = true;
    goCheckbox.disabled = true;

    var interval = setInterval(async () => {
      await fetch("https://ads.driveyouradblockcounterup.com")
      .then(response => response.json())
      .then(function(data){
        if(data.responded === true){
          clearInterval(interval);
          alert("No ad blocker detected! Please enable a compatible ad blocker, refresh this page, and try again.");
          goButton.disabled = false;
          goCheckbox.disabled = false;
          counter = 0
          counterDisplay.innerHTML = counter;
        }
      })
      .catch(function(error) {
        console.log("Request to fake ad server, expectedly, failed! This is intended. Trying again...");
      });

      counterDisplay.innerHTML = counter++;
    }, 50);
  }
  else{
    alert("Please check the box confirming that you understand what this website does.");
  }
}

goButton.addEventListener("click", go, false);
