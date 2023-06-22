import { Sequelize } from 'sequelize';

const connect = new Sequelize( 'node', 'root', 'n0m3l0', {
    host: '192.168.1.73',
    dialect: 'mysql'
} );

export default connect;
