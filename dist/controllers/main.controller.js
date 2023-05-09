"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHome = void 0;
const getHome = (req, res) => {
    res.sendFile('index.html', { root: 'public' });
};
exports.getHome = getHome;
