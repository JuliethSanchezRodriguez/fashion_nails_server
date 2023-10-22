import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Factura  = sequelize.define('Factura', {
  id_factura: {
    type: DataTypes.INTEGER,
    primaryKey: true 
  },
  id_cita : {
    type: DataTypes.STRING,
    allowNull: true,
  },
  id_metodo_pago : {
    type: DataTypes.STRING,
    allowNull: true,
  },
  

});

export default Factura;
