"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let count = 0;
const viewCount = (req, res, next) => {
    count++;
    console.log(count);
    next();
};
exports.default = viewCount;
