module.exports = (sequelize, DataType) => {

    const Pedidos = sequelize.define('Pedidos', {
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
      contenido: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      entregado: {
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
  
    Pedidos.associate = (models) => {
      Pedidos.belongsTo(models.Users);
      Pedidos.hasMany(models.Productos);
    };
  
    return Pedidos;
  };