const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const stratford = require("./data/Stratford.json");

app.get("/pharmacies", (request, response) => {
  response.send(stratford.pharmacies);
});

app.get("/colleges", (request, response) => {
  response.send(stratford.colleges);
});

app.get("/doctors", (request, response) => {
  response.send(stratford.doctors);
});

app.get("/hospitals", (request, response) => {
  response.send(stratford.hospitals);
});

app.listen(PORT, () => {
  console.log("listening on port" + PORT);
});
