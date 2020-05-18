// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");

   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      // @ts-ignore
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("Please enter values for all fields.");
         event.preventDefault();
      }
      // @ts-ignore
      else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Please enter valid number values.");
         event.preventDefault();
      }
      // @ts-ignore
      else if (!(isNaN(pilotName.value)) || !(isNaN(copilotName.value))) {
         alert("Please enter valid name values.");
         event.preventDefault();
      }

      let pilotStatus = document.getElementById("pilotStatus");
      // @ts-ignore
      pilotStatus.innerHTML = pilotName.value;

      let copilotStatus = document.getElementById("copilotStatus");
      // @ts-ignore
      copilotStatus.innerHTML = copilotName.value;

      let faultyItems = document.getElementById("faultyItems");
      let fuelStatus = document.getElementById("fuelStatus");
      let launchStatus = document.getElementById("launchStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      // @ts-ignore
      if (fuelLevel.value < 10000) {
         fuelStatus.innerHTML = "Not enough fuel for the journey";
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         event.preventDefault();
      }
      // @ts-ignore
      else if (cargoMass.value > 10000) {
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         event.preventDefault();
      }
   });
   let json = [];

   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
         <img src="${json[0].image}">
         `;


      });
   });




});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
