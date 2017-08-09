/**
 * Created by kid on 2016/12/30.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import stopwatch from './modules/stopwatch';
import alert from './modules/alert';
import actions from './actions';
import getters from './getters';
import mutations from './mutations'

Vue.use(Vuex);

const state = {
	fetchState: false,
	resultData: {}
};

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules: {
		counter,
		stopwatch,
		alert
	}
});