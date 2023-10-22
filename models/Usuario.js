import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Usuario = sequelize.define('usuario', {
  usuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Sincroniza el modelo con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Modelo de usuario sincronizado con la base de datos');
  })
  .catch(err => {
    console.error('Error al sincronizar el modelo:', err);
  });

  export default Usuario;

