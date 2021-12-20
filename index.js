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
