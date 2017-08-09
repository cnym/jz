/**
 * Created by kid on 2016/12/26.
 */
import history from 'connect-history-api-fallback';

export default options =>{
	const middleware = history(options);
	const noop = ()  =>{};

	return async (ctx, next)=> {
		middleware(ctx, null, noop);
		await next();
	};
}