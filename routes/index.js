var express = require('express');
var router = express.Router();
var fs = require('fs');
var postRequest = require('../modules/postRequest');

router.get('/', function(req, res, next) {
	res.render('index', {
		title: '首页',
		data: { name: 'bu' }
	});
});

router.get(
	[
		'/wxpub/app/backdoor',
		'/wxpub/api/exercise'
	],
	function (req, res, next) {
		postRequest(req, res);
	}
);

module.exports = router;