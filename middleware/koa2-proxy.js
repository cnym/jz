/**
 * Created by kid on 2017/1/5.
 */

/**
 * Dependencies
 */
const HttpProxy = require('http-proxy');

/**
 * Constants
 */

const proxy = HttpProxy.createProxyServer();

/**
 * Koa Http Proxy Middleware
 */

module.exports = (context, options) => (ctx, next) => {
	if (!ctx.req.url.startsWith(context)) return next();

	const { logs, rewrite } = options;

	return new Promise((resolve, reject) => {
		if (logs) logger(ctx);

		if (typeof rewrite === 'function') {
			ctx.req.url = rewrite(ctx.req.url)
		}

		proxy.web(ctx.req, ctx.res, options, e => {
			if (e) {
				ctx.status = 500;
				reject(e)
			}
		})
	})
};

function logger(ctx) {
	console.log('%s - %s %s', new Date().toISOString(), ctx.req.method, ctx.req.url)
}
