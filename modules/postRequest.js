/**
 * Created by kid on 2016/3/21.
 */

'use strict';

var hoa = require('../config/config').service.httpOpenApi;
var request = require('request');
var formatRole = require('../modules/formatRole');
var getClientIP = require('../modules/getClientIP');

function postRequest(req, res, timeout) {
	var role = formatRole(req.session.userInfo.roleList);
	var dataBody = req.body;
	timeout = timeout ? timeout : 3000 * 60;
	req.setTimeout(timeout);
	
	dataBody.uid = req.session.userInfo.id;
	dataBody.utype = '1';
	dataBody.apiURL = req.url;

	if (req.session.userInfo.account == 'admin') {
		dataBody.adminTTL = require('../config/config').service.redis.ttl;
	}

	if (dataBody.parameters) {
		dataBody.parameters.roleName = role;
		dataBody.parameters.ip = getClientIP(req);
	}
	var opts = {
		headers: {'Connection': 'close', 'Content-Type': 'application/json; charset=utf-8', 'node': 'open'},
		method: 'POST',
		url: hoa.url,
		json: true,
		body: dataBody
	};
	var callback = function(e, r, body) {
		if (!e) {
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
		}
	};
	
	request(opts, callback);
}

module.exports = postRequest;