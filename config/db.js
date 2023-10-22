// db.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('fashion_nails', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
    freezeTableName: true
  }
});

export default sequelize;