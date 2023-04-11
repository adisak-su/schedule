function writeLogger(_class,_statusCode,_statusMessage) {
    const message = {
        class : _class,
        statusCode: _statusCode,
        statusMessage: _statusMessage
    }
    return message;
//    logger.error(message)
}

// exports.writeLoggerError = writeLogger

function Common(){}

Common.prototype.writeLoggerError = function(_class,_statusCode,_statusMessage) {
    const message = {
        class : _class,
        statusCode: _statusCode,
        statusMessage: _statusMessage
    }
    return message;
//    logger.error(message)
}
Common.prototype.messageError = function(_class,_statusCode,_statusMessage) {
    const message = {
        class : _class,
        statusCode: _statusCode,
        statusMessage: _statusMessage
    }
    return message;
//    logger.error(message)
}
//Common.prototype.method2 = function(){}

export default new Common()

//module.exports = new Common();