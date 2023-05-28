"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Package Imports
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
// Other Imports
const viewCount_1 = __importDefault(require("./middleware/viewCount"));
// Routes
const main_route_1 = __importDefault(require("./routes/v1/main.route"));
// Middlewares
const corsOptions = {
    origin: "https://activityhubrs.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
// app.use(cookieParser());
// app.use(compression());
// app.use(bodyParser.json());
app.use(body_parser_1.default.json({ limit: '200mb' }));
// app.use(express.urlencoded({limit: '200mb', extended: true}));
app.set('json spaces', 2);
// main endpoints
app.use("/api/v1", viewCount_1.default, main_route_1.default);
app.all("*", (req, res) => {
    res.status(404).send("Sorry no api route found! Try <b style='color:red'>/api/v1/[endpoints]</b> instead");
});
// module.exports = app;
exports.default = app;
