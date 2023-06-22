import { DataTypes } from 'sequelize';
import connectDB from '../database/connection';

const User = connectDB.define( 'User', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.BOOLEAN
    }
} );

export default User;
