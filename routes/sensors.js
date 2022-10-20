var express = require("express");
var router = express.Router();
const sensor = require("../controllers/sensor.controller");

router.post("/", sensor.store_values);

router.get("/", sensor.get_values);

module.exports = router;
