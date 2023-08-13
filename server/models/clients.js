module.exports = (sequelize, DataTypes) => {
  const Clients = sequelize.define("Clients", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    deliveryadress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Clients;
};
