const config = require('./config')

class Logger{
    constructor(func){
        this.function = func
     }

    createLog(message){
        const timestamp = new Date().toLocaleTimeString();
        console.log(`${timestamp} [${config.config.appName}] ${message}`)
    }
}

module.exports = { Logger }