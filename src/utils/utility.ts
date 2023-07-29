import  mongoose  from 'mongoose';
import { spawn } from 'child_process';
import path from 'path';
import moment from 'moment';

// change string id to mongodb object id
export const convertToObjectId = (id:string) => {
    const objectId = new mongoose.mongo.ObjectId(id);
    return objectId;
}

const archivePath = path.join(__dirname, '../../backup/');

export const backupDatabase = () => {
    console.log('🔥 Backing up database 🔥');
    const date = moment().utcOffset("+06:00").format('YYYY-MM-DD-HH-mm-ss');
    const backup = spawn('mongodump', [
        "--authenticationDatabase=admin",	
        `--db=${process.env.DATABASE_NAME}`,
        `--uri=${process.env.DATABASE_URI}`,
        // `--archive=${archivePath}${process.env.DATABASE_NAME}_${date}.gzip`,
        `--archive=${archivePath}dbbackuped.gzip`,
        '--gzip'
    ]);

    backup.stdout.on('data', (data) => {
        console.log(`stdout:\n ${data}`);
    });
    backup.stderr.on('data', (data) => {
        console.log(`stderr:\n ${data}`);
    });
    backup.on('error', (error) => {
        console.log(`error:\n ${error}`);
    });
    backup.on('exit', (code,signal) => {
        if(code){
            console.log(`backup process exited with code ${code}`);
        }
        else if(signal){
            console.log(`backup process was killed with signal ${signal}`);
        }
    });
};
