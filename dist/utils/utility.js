"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.backupDatabase = exports.convertToObjectId = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const moment_1 = __importDefault(require("moment"));
// change string id to mongodb object id
const convertToObjectId = (id) => {
    const objectId = new mongoose_1.default.mongo.ObjectId(id);
    return objectId;
};
exports.convertToObjectId = convertToObjectId;
const archivePath = path_1.default.join(__dirname, '../../backup/');
const backupDatabase = () => {
    console.log('🔥 Backing up database 🔥');
    const date = (0, moment_1.default)().utcOffset("+06:00").format('YYYY-MM-DD-HH-mm-ss');
    const backup = (0, child_process_1.spawn)('mongodump', [
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
    backup.on('exit', (code, signal) => {
        if (code) {
            console.log(`backup process exited with code ${code}`);
        }
        else if (signal) {
            console.log(`backup process was killed with signal ${signal}`);
        }
    });
};
exports.backupDatabase = backupDatabase;
