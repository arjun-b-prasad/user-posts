import { Sequelize,Options } from "sequelize";
require('dotenv').config();

const options: Options = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT as unknown as number,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    sync: {alter:true,logging:true},
    logging:true
}

const sequelize = new Sequelize(options);

export default sequelize;