var express = require("express");
var router = express.Router();
const sensor = require("../controllers/sensor.controller");

router.get("/get", sensor.store_values_get);

router.post("/", sensor.store_values);

router.get("/", sensor.get_values);

module.exports = router;
