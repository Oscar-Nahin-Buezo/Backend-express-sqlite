module.exports = (sequelize, DataType) => {

    const Productos = sequelize.define('Productos', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      marca: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      Contenido: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      precio: {
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      Unidades: {
        type: DataType.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    });
  
    Productos.associate = (models) => {
      Productos.belongsTo(models.Pedidos);
      Productos.belongsTo(models.Users);
    };
  
    return Productos;
  };