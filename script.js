const config = require('./config');
const logger = require('./logger');
const scheduler = require('./scheduler');
const log = new logger.Logger();

scheduler.createPeriodicTask("createLog", 10000, () => {
    log.createLog("running")
});

