var url = require('url');
/**
 * 修饰Request，新增query和pathname成员
 * @param request
 * @return void
 */
exports.fixRequest = function (request) {
    var url_info = url.parse(request.url);
    request.query = url_info.query;
    request.pathname = url_info.pathname;
};