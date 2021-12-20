const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/forcast/:city/:day", async (req, res) => {
  const city = req.params.city;
  const days = req.params.day;

  var key = process.env.API_KEY;

  const optipns = {
    method: "GET",
    url:
      "http://api.weatherapi.com/v1/forecast.json?key=" +
      key +
      "&q=" +
      city +
      "&days=2&aqi=yes&alerts=no",
    headers: {},
  };
  request(optipns, function (err, response) {
    if (err) throw new Error(error);
    console.log(response.body);

    res.status(200).json(response.body);
  });
});

module.exports = router;
