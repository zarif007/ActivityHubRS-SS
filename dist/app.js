"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Package Imports
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const app = (0, express_1.default)();
// Other Imports
const viewCount_1 = __importDefault(require("./middleware/viewCount"));
// Routes
const main_route_1 = __importDefault(require("./routes/v1/main.route"));
// Middlewares
app.use(cors());
app.use((0, cookie_parser_1.default)());
app.use((0, compression_1.default)());
app.use(express_1.default.json());
// main endpoints
app.use("/api/v1", viewCount_1.default, main_route_1.default);
app.all("*", (req, res) => {
    res.status(404).send("Sorry no API Route Not Found");
});
// module.exports = app;
exports.default = app;
