import * as dotenv from 'dotenv';
dotenv.config();

import app from './app';

const PORT = process.env.MAC_PORT || process.env.PORT || 5000;


  
// Database connection
import {connectToDatabase} from './utils/dConnect';   
connectToDatabase();





// Server Starter
app.listen(PORT, () => {
  console.log(`Server started @ port ${PORT}`);
  // console.log(`Process ID ${process.pid}`);
});



