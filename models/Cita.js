import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Cita = sequelize.define('cita', {
    id_cita: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_empleado: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_hora_cita: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fecha_hora_servicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  nota: {
    type: DataTypes.TEXT,
  },
});

export default Cita;
