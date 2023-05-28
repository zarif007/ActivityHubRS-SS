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
const whitelist = ["https://activityhubrs.vercel.app","https://www.google.com"]
const corsOptions = {
  origin: (origin:any, callback:any) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error())
    }
  }
}
app.use(cors(corsOptions));

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