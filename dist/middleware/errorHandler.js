"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    res.send(err.message);
};
module.exports = errorHandler;
