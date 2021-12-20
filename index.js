// const http = require("http");

// const req = http.request(
//   "http://api.weatherapi.com/v1/forecast.json?key=73af8f29e27149e7b1a73152211812&q=Hawassa&days=1&aqi=no&alerts=no#",
//   (res) => {
//     console.log(`statusCode: ${res.statusCode}`);

//     // res.on("data", (d) => {
//     //   process.stdout.write(d);
//     // });
//   }
// );

// req.on("error", (error) => {
//   console.error(error);
// });

// req.end();
// // this is get request
// const ex = http.get(
//   "http://api.weatherapi.com/v1/forecast.json?key=73af8f29e27149e7b1a73152211812&q=Hawassa&days=1&aqi=no&alerts=no#",
//   (res) => {
//     console.log("hey baby");

//     res.on("data", (d) => {
//       process.stdout.write(d);
//     });
//   }
// );

// // post request
// http.get(
//   "http://api.weatherapi.com/v1/forecast.json?key=73af8f29e27149e7b1a73152211812&q=Hawassa&days=1&aqi=no&alerts=no#",
//   (res) => {
//     console.log("hey baby");

//     res.on("data", (d) => {
//       process.stdout.write(d);
//     });
//   }
// );

// ex.on("error", (error) => {
//   console.error(error);
// });
// const express = require("express");
// const http = require("http");
// const PORT = process.env.PORT || 6000;

// const app = express();

// // const what = http.get(
// //   "http://api.weatherapi.com/v1/forecast.json?key=73af8f29e27149e7b1a73152211812&q=Hawassa&days=1&aqi=no&alerts=no#",
// //   (res) => {
// //     console.log("hey baby");

// //     res.on("data", (d) => {
// //       process.stdout.write(d);
// //     });
// //   }
// // );

// const server = http.createServer(app);

// server.listen(PORT, function () {
//   console.log("server is running on ${PORT}");
// });

const PORT = process.env.PORT || 6000;
const http = require("http");
const express = require("express");
const app = express();
const router = require("./routes");

app.use(router);

const server = http.createServer(app);

router.use(express.json({ extended: false }));
router.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(function (req, res, next) {
  next();
});
router.get("/", (req, res) => {
  res.render("pages/index");
});

app.use(router);

server.listen(PORT);
