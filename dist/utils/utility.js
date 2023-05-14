"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToObjectId = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// change string id to mongodb object id
const convertToObjectId = (id) => {
    const objectId = new mongoose_1.default.mongo.ObjectId(id);
    return objectId;
};
exports.convertToObjectId = convertToObjectId;
