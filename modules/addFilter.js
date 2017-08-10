module.exports = function (env) {
	env.addFilter('ObjectToString', function (obj) {
		return JSON.stringify(obj);
	});
}