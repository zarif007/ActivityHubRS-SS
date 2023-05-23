"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDb = exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbUri = process.env.DATABASE_URI;
const dbName = process.env.DATABASE_NAME;
let _db;
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(`${dbUri}`, { dbName });
        console.log(`Successfully connected to Database [${dbName}]`);
    }
    catch (err) {
        console.log(err);
    }
});
exports.connectToDatabase = connectToDatabase;
const getDb = () => {
    return _db;
};
exports.getDb = getDb;
