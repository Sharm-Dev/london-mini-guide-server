const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const stratford = require("./data/Stratford.json");

app.get("/:city/:building", (request, response) => {
  const city = request.params.city;
  const building = request.params.building;
  const dataCity = require(`./data/${city}.json`);
  response.send(dataCity[building]);
});


//The city dyminic string code, get request to a json file
// app.get("/:city/pharmacies", (request, response) => {
//     const city = request.params.city;
//     const dataCity = require(`./data/${city}.json`)
//   response.send(dataCity.pharmacies);
// });


// //This is single get request to a json file
// app.get("/colleges", (request, response) => {
//   response.send(stratford.colleges);
// });

// app.get("/doctors", (request, response) => {
//   response.send(stratford.doctors);
// });

// app.get("/hospitals", (request, response) => {
//   response.send(stratford.hospitals);
// });

app.listen(PORT, () => {
  console.log("listening on port" + PORT);
});
