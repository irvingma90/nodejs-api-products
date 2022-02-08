import {MONGODB_URI} from './config';
import {connect} from 'mongoose';

(async () =>{
    try {
        const db = await connect(MONGODB_URI);
        console.log("DB is connected to", db.connection.name);
    } catch (error){
        console.log(error);
    }
})();
