import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const MetodoPago = sequelize.define('metodo_pago', {
  id_metodo_pago: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

export default MetodoPago;
