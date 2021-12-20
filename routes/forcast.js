const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/forcast/:city/:day", async (req, res) => {
  const city = req.params.city;
  const days = req.params.day;

  const optipns = {
    method: "GET",
    url:
      "http://api.weatherapi.com/v1/forecast.json?key=73af8f29e27149e7b1a73152211812&q=" +
      city +
      "&days=" +
      days +
      "&aqi=yes&alerts=yes",
    headers: {},
  };
  request(optipns, function (err, response) {
    if (err) throw new Error(error);
    console.log(response.body);

    res.status(200).json(response.body);
  });
});

module.exports = router;
