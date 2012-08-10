var fs = require('fs');
var path = require('path');

var logger = require('../logger.js');

module.exports = function (base_path) {
    base_path = base_path || '';
    /** TODO:未使用route */
    return function (request, response, next) {
        var file = path.normalize(path.join(base_path, request.pathname));
        logger.info(file);
        fs.stat(file, function (error, stat) {
            if (error) {
                return next(error);
            }
            if (stat.isFile()) {
                fs.createReadStream(file).pipe(response);
            }
            else {
                logger.debug('304');
            }
        });
    };
};