import mongoose from 'mongoose';
import config from '../config';

require('./schema/info');
require('./schema/student');
require('./schema/course');

export const database = () => {
    mongoose.set('debug', true);

    mongoose.connect(config.dbPath);

    mongoose.connection.on('disconnected', () => {
        mongoose.connect(config.dbPath);
    });

    mongoose.connection.on('error', err => {
        console.error(err);
    });

    mongoose.connection.on('open', async () => {
        console.log('Connected on MongoDB', config.dbPath);
    })
}