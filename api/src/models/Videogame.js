const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Videogame",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "Game description.",
      },
      platform: {
        type: DataTypes.ENUM(
          "PC",
          "PlayStation 4",
          "PlayStation 5",
          "Xbox 360",
          "Xbox One",
          "Nintendo Switch",
          "Xbox Series S/X",
          "Otro"
        ),
        allowNull: false,
        defaultValue: "Seleccione la plataforma.",
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: "No image available",
      },
      launch: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validator: {
          min: 1,
          max: 5,
        },
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
