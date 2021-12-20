const express = require("express");
const request = require("request");
const router = express.Router();

router.get("/timezone/:city", async (req, res) => {
  const city = req.params.city;
  console.log(city);

  var options = {
    method: "GET",
    url:
      "http://api.weatherapi.com/v1/timezone.json?key=73af8f29e27149e7b1a73152211812&q=" +
      city,
    headers: {},
  };

  request(options, function (err, response) {
    if (err) throw new Error(error);
    console.log(response.body);
    res.status(200).json(response.body);
  });
});

module.exports = router;
