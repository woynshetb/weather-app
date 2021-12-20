const router = require("express").Router();

const weatherRouter = require("./weather");
const astronomyRouter = require("./astronomy");
const timezoneRouter = require("./timezone");
const forcastRouter = require("./forcast");

router.use(forcastRouter);
router.use(timezoneRouter);
router.use(astronomyRouter);
router.use(weatherRouter);

module.exports = router;
