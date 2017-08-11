'use strict';

var hoa = require('../config/config').service.httpOpenApi;
var request = require('request');

function postRequest(req, res, timeout) {
	var dataBody = req.body;
	timeout = timeout ? timeout : 3000 * 60;
	req.setTimeout(timeout);// 设置3分钟的请求数据超时时间

	var opts = {
		headers: {'Connection': 'close', 'Content-Type': 'application/json; charset=utf-8', 'node': 'open'},
		method: 'GET',
		url: hoa.url+req.url,
		json: true,
		body: dataBody
	};
	var callback = function(e, r, body) {
		res.send(body);
		/*if (!e) {
			if (r.statusCode == 200) {
				if (body.resultCode == 0) {
					body.authList = req.session.authList;
					res.send(body);
				} else {//如果code不为0，需要判断权限是否过期，如果过期，则销毁session并重定向到首页
					if (body.resultMsg == '登录已过期，请重新登录') {
						req.session.destroy();

						res.send({
							resultCode: -3
						});
					} else {
						res.send(body);
					}
				}
			} else {
				res.send({
					resultMsg: '服务器内部错误，请重试',
					resultCode: -2
				});
			}
		} else {
			console.log(e);
			res.send({
				resultMsg: '服务器内部错误，请重试',
				resultCode: -2
			});
		}*/
	};

	request(opts, callback);
}

module.exports = postRequest;