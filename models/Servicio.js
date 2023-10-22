import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Servicio = sequelize.define('Servicio', {
  id_servicio: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  duracion_minutos: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tecnica: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  id_tipo_servicio: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Servicio;
