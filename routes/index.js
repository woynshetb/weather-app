const router = require("express").Router();

const weatherRouter = require("./weather");
router.use(weatherRouter);

module.exports = router;
