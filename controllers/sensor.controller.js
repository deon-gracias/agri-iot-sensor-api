const e = require("express");
const db = require("../models");
const Sensor = db.sensors;

const Op = db.Sequelize.Op;

exports.store_values_get = async (req, res, next) => {
  await Sensor.create(req.query).then((data) =>
    res.status(201).json({ message: "Successfully added sensor values" })
  );
};

exports.store_values = async (req, res, next) => {
  await Sensor.create(req.body)
    .then((data) =>
      res.status(201).json({ message: "Successfully added sensor values" })
    )
    .catch((e) =>
      res
        .status(400)
        .json({ message: "Failed adding sensor values", error: e.message })
    );
};

exports.get_values = async (req, res, next) => {
  const sensor_values = await Sensor.findAll();

  if (!sensor_values)
    res.status(400).send({
      message: "Couldn't find values",
      error: "Something went wrong",
    });

  res.status(200).send({
    data: sensor_values,
  });
};
