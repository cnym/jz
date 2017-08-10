var express = require('express');
var router = express.Router();
//var hoa = require('../config/config').service.httpOpenApi;
var request = require('request');
var fs = require('fs');
//var getRequest = require('../modules/getRequest');
//var postRequest = require('../modules/postRequest');
//var path = require('path');

router.get('/', function(req, res, next) {
	res.render('index', {
		title: '首页',
		pid: 1,
		sid: 101,
		data: { name: 'bu' }
	});
});

module.exports = router;