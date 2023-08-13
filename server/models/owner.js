module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define("Owner", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    adresse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Owner;
};
