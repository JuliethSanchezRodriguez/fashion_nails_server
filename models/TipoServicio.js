import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const TipoServicio = sequelize.define('tipo_servicio', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

export default TipoServicio;
