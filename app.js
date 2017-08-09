import Koa from 'koa';
import convert from 'koa-convert';
import logger from 'koa-logger';
import bodypaser from 'koa-body';
import webpack from 'webpack';
import devMiddleware from './middleware/koa2-webpack-dev-middleware';
import hotMiddleware from './middleware/koa2-webpack-hot-middleware';
import webpackDevConfig from './build/webpack.dev.conf';
import history from './middleware/koa2-connect-history-api-fallback';
import koaStatic from 'koa-static';
import favicon from 'koa-favicon';
import proxy from './middleware/koa2-request-middleware';
import config from './config/config';

const app = new Koa();

app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodypaser());
app.use(convert(logger()));
app.use(history({
	verbose: true
}));

if (app.env == 'development') {
	const compiler = webpack(webpackDevConfig);
	
	app.use(devMiddleware(compiler, {
		publicPath: '/',
		stats: {
			colors: true,
			chunks: false
		}
	}));
	
	app.use(hotMiddleware(compiler));
} else {
	app.use(koaStatic(__dirname + '/output'));
}

app.use(proxy('/api', {
	target: config.api.httpOpenApi.url
}));

app.use(async(ctx, next) => {
	ctx.body = {
		resultCode: -1,
		resultMsg: 'api 错误'
	};
	
	await next();
});

export default app;