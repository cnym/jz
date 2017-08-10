/**
 * Created by kid on 2016/3/21.
 */

'use strict';

var hoa = require('../config/config').service.httpOpenApi;
var request = require('request');

function getRequest(req, res, uri, renderData) {
	var role = formatRole(req.session.userInfo.roleList);
	var dataBody = req.query;
	dataBody.uid = req.session.userInfo.id;
	dataBody.utype = '1';
	dataBody.apiURL = req.url;
	if (dataBody.parameters) {
		dataBody.parameters.roleName = role;
		dataBody.parameters.ip = getClientIP(req);
	}
	request({
		method: 'POST',
		url: hoa.url,
		json: true,
		body: dataBody,
		headers: {'Connection': 'close', 'Content-Type': 'application/json; charset=utf-8', 'node': 'open'}
	}, function (error, response, body) {
		console.log(body);
		if (!error) {
			if (response.statusCode == 200) {
				renderData.data = body;
				res.render(uri, renderData);
			} else {
				res.render('error', {
					message: '服务器内部错误，请返回重试',
					error: error,
					title: '出错了'
				});
			}
		} else {
			res.render('error', {
				message: error.message,
				error: error,
				title: 'error'
			});
		}
	});
}

module.exports = getRequest;