// db.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASS, {
  host: process.env.HOST,
  dialect: 'mysql',
  define: {
    timestamps: false,
    freezeTableName: true
  }
});

export default sequelize;