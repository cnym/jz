/**
 * Created by kid on 2016/12/30.
 */
import * as types from '../mutation-types';

let timer;

const state = {
	minute: 0,
	second: 0,
	millisecond: 0,
	status: 'stop'
};

const actions = {
	startStopwatch({commit}) {
		commit(types.START_STOPWATCH);
	},
	pauseStopwatch({commit}) {
		commit(types.PAUSE_STOPWATCH);
	},
	resetStopwatch({commit}) {
		commit(types.RESET_STOPWATCH);
	}
};

const getters = {
	minute: state=> (state.minute >= 10) ? state.minute : '0' + state.minute,
	second: state=> (state.second >= 10) ? state.second : '0' + state.second,
	millisecond: state=> (state.millisecond >= 10) ? state.millisecond : '0' + state.millisecond,
	status: state=> state.status
};

const mutations = {
	[types.START_STOPWATCH](state) {
		const delay = 10;

		state.status = 'start';
		timer = setInterval(()=> {
			state.millisecond++;

			if (state.millisecond > 99) {
				state.millisecond = 0;
				state.second++;
			}

			if (state.second > 59) {
				state.second = 0;
				state.minute++;
			}
		}, delay);
	},
	[types.PAUSE_STOPWATCH](state) {
		clearInterval(timer);
		state.status = 'pause';
	},
	[types.RESET_STOPWATCH](state) {
		clearInterval(timer);
		state.status = 'stop';
		state.minute = 0;
		state.second = 0;
		state.millisecond = 0;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}