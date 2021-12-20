const { response } = require("express");
const express = require("express");
const http = require("http");
const request = require("request");

const router = express.Router();

router.get("/fetching", async (req, res) => {
  var options = {
    method: "GET",
    url: "http://api.weatherapi.com/v1/forecast.json?key=73af8f29e27149e7b1a73152211812&q=Hawassa&days=1&aqi=no&alerts=no#",
    headers: {},
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);

    res.status(200).json(response.body);
  });
});

module.exports = router;
