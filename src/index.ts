import * as dotenv from 'dotenv';
dotenv.config();

import app from './app';
import cron from 'node-cron';
const PORT = process.env.MAC_PORT || process.env.PORT || 5000;




// Database connection
import { connectToDatabase } from './utils/dConnect';
import { backupDatabase } from './utils/utility';
connectToDatabase();


// backupDatabase()
// // Backup Database
// cron.schedule('0 1 * * *', backupDatabase,{
//   timezone: "Asia/Dhaka"
// });



// Server Starter
app.listen(PORT, () => {
  console.log(`Server started @ port ${PORT}`);
});



