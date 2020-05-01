var CronJob = require('cron').CronJob;

const fetchGithub = require('./task/fetch-github')

new CronJob('* * * * *',fetchGithub,null,true,'America/Los_Angeles')