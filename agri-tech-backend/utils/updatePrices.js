const cron = require('node-cron');
const { exec } = require('child_process');

// Schedule the price update script to run daily at midnight
cron.schedule('0 0 * * *', () => {
  console.log('Running daily price update...');
  exec('node utils/updatePrices.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Script stderr: ${stderr}`);
      return;
    }
    console.log(`Script stdout: ${stdout}`);
  });
});