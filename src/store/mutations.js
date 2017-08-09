/**
 * Created by kid on 2016/12/30.
 */
import * as types from './mutation-types';
import fetch from 'isomorphic-fetch';
import store from './index';

export default {
	[types.GETDATA](state, parameters) {
		const opts = {
			method: 'POST',
			body: JSON.stringify(parameters.data)
		};
		state.fetchState = true;
		
		if (store.getters.isShow) {
			store.commit(types.ALERT_HIDE);
		}
		fetch(parameters.url, opts)
			.then(res => {
				if (res.status >= 400) {
					return {
						resultCode: -1,
						resultMsg: '错误的请求'
					};
				}
				
				return res.json();
			})
			.then(body => {
				state.fetchState = false;
				state.resultData = body;
				if (body.resultCode != 0) store.commit(types.ALERT_SHOW, body);
			})
			.catch(err => {
				console.log(err);
				state.fetchState = false;
				store.commit(types.ALERT_SHOW, {
					resultCode: -1,
					resultMsg: '出错了……'
				});
			});
	}
}