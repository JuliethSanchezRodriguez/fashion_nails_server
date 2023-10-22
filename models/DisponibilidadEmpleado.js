// models/DisponibilidadEmpleado.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const DisponibilidadEmpleado = sequelize.define('disponibilidad_empleado', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  id_empleado: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dia_semana: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  hora_inicio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  hora_final: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default Empleado;
