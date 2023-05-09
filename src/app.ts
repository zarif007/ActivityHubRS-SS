// Package Imports
import express from 'express';
import cors = require("cors");
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';

const app = express();

// Other Imports
import viewCount from './middleware/viewCount';


// Routes
import mainRoute from './routes/v1/main.route';


// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(compression());
app.use(express.json());



// main endpoints
app.use("/api/v1", viewCount, mainRoute);
app.all("*", (req, res) => {
    res.status(404).send("Sorry no API Route Not Found");
});


// module.exports = app;
export default app;