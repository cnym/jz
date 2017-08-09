/**
 * Created by kid on 2017/1/16.
 */
import request from 'request'

const defaultOptions = {
	target: ''
};
/**
 * 请求转发，使用request.js
 * @param context 定义过滤url
 * @param options 选项
 */
export default (context, options = defaultOptions) => async(ctx, next) => {
	const re = new RegExp('^\\' + context + '(\\/|\\/\\w+)?$');
	const pass = re.test(ctx.req.url);
	
	if (!pass) return next();
	
	const url = options.target;
	const opts = {
		headers: {
			'Connection': 'close',
			'Content-Type': 'application/json; charset=utf-8',
			'node': 'open'
		},
		method: 'POST',
		url: url,
		json: true,
		body: await JSON.parse(ctx.request.body)
	};
	
	ctx.body = await request(opts, (e, r, body) => {
		if (!e) {
			return Promise.resolve(body);
		} else {
			return Promise.reject(e);
		}
	})
}