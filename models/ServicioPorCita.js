import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const ServicioPorCita  = sequelize.define('servicio_por_cita', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true 
  },
  id_cita: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  id_servicio: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

export default ServicioPorCita;
