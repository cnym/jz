'use strict';

var hoa = require('../config/config').service.httpOpenApi;
var request = require('request');
// https://www.npmjs.com/package/request 设置request jar续传cookie
var j = request.jar();
request = request.defaults({
	jar: j,
	headers: { 'Connection': 'close', 'Content-Type': 'application/json; charset=utf-8', 'node': 'open' },
	json: true,
	method: 'GET'
});

function postRequest(req, res, timeout) {
	//设置超时时间
	timeout = timeout ? timeout : 3000 * 60;
	req.setTimeout(timeout);// 设置3分钟的请求数据超时时间
	//设置request参数
	var opts = {
		url: hoa.url + req.url
	};
	//设置request回调
	var callback = function(error, response, body) {
		if (!error) {
			if (response.statusCode == 200) {
				res.send(body);
			} else {
				res.send({
					errmsg: '服务器内部错误，请重试',
					errcode: -2
				});
			}
		} else {
			res.send({
				errmsg: '服务器内部错误，请重试',
				errcode: -2
			});
		}
	};
	//发送request请求
	request(opts, callback);
}

module.exports = postRequest;