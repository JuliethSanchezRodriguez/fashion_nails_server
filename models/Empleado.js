// models/Empleado.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Empleado = sequelize.define('empleado', {
  id_empleado: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  num_telefonico: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ocupacion: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default Empleado;
