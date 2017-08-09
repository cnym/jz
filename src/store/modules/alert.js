/**
 * Created by kid on 2017/1/6.
 */
import * as types from '../mutation-types';

const state = {
	isShow: false,
	alertCode: 0,
	alertMsg: '信息……'
};

const actions = {
	showAlert({commit}) {
		commit(types.ALERT_SHOW);
	},
	hideAlert({commit}) {
		commit(types.ALERT_HIDE);
	}
};

const getters = {
	isShow: state => state.isShow,
	alertCode: state => state.alertCode,
	alertMsg: state => state.alertMsg
};

const mutations = {
	[types.ALERT_SHOW](state, data) {
		state.isShow = true;
		if (data) {
			state.alertCode = data.resultCode;
			state.alertMsg = data.resultMsg;
		}
	},
	[types.ALERT_HIDE](state) {
		state.isShow = false;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}