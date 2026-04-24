const logger = require('./logger');
log = new logger.Logger("scheduler");
log.createLog("scheduler was used")

function createPeriodicTask(name, interval, task) {
    createdTask = {
        name: name,
        interval: interval,
        func: task,
        intervalId: undefined,
    }
    createdTask.intervalId = setInterval(() => {
        task()
    }, interval);
    return createdTask;
}

function clearPeriodicTask(taskId) {
    clearInterval(taskId)
}


module.exports = { createPeriodicTask, clearPeriodicTask }