const router = require("express").Router();

const weatherRouter = require("./weather");
const astronomyRouter = require("./astronomy");

router.use(astronomyRouter);
router.use(weatherRouter);

module.exports = router;
