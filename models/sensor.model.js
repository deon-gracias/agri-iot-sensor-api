module.exports = (sequelize, Sequelize) => {
  const Sensor = sequelize.define("sensor", {
    N: { type: Sequelize.INTEGER },
    P: { type: Sequelize.INTEGER },
    K: { type: Sequelize.INTEGER },
    temperature: { type: Sequelize.INTEGER },
    humidity: { type: Sequelize.INTEGER },
    moisture: { type: Sequelize.INTEGER },
    wind_speed: { type: Sequelize.INTEGER },
    altitude: { type: Sequelize.INTEGER },
    light: { type: Sequelize.INTEGER },
    rain: { type: Sequelize.INTEGER },
    wind_direction: { type: Sequelize.INTEGER },
    pump: { type: Sequelize.INTEGER },
    earth_x: { type: Sequelize.INTEGER },
    earth_y: { type: Sequelize.INTEGER },
    earth_z: { type: Sequelize.INTEGER },
  });

  return Sensor;
};
