
import mogoose from 'mongoose';
import {ENV} from './env.js';

export const connectDB = async () => {
    try {
        const conn= await mogoose.connect(ENV.DB_URL);
        console.log(`DB Successfully Conneted ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`DB Connection Error ${error}`);
        process.exit(1) // exit code 1 means failure and 0 menas success
        
    }
}