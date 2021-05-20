// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)

const schedule = require('node-schedule');

const jobOne = schedule.scheduleJob('44 * * * *', function () {
    console.log('Job One - Execute a cron job when the minute is 44!');
});

const jobTwo = schedule.scheduleJob('*/1 * * * *', function () {
    console.log('Job Two - Execute a cron job every 1 Minutes!');
});