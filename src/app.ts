// Package Imports
import express from 'express';
import cors = require("cors");
import bodyParser from 'body-parser';


const app = express();

// Other Imports
import viewCount from './middleware/viewCount';


// Routes
import mainRoute from './routes/v1/main.route';


// Middlewares
app.use(cors());
// app.use(cookieParser());
// app.use(compression());
// app.use(bodyParser.json());
app.use(bodyParser.json({limit: '200mb'}));
// app.use(express.urlencoded({limit: '200mb', extended: true}));
app.set('json spaces', 2)



// main endpoints
app.use("/api/v1", viewCount, mainRoute);
app.all("*", (req, res) => {
    res.status(404).send("Sorry no api route found! Try <b style='color:red'>/api/v1/[endpoints]</b> instead");
});


// module.exports = app;
export default app;