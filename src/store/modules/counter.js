/**
 * Created by kid on 2016/12/30.
 */
import * as types from '../mutation-types';

const state = {
	count: 0
};

const actions = {
	increment({commit}) {
		commit(types.INCREMENT);
	},
	decrement({commit}) {
		commit(types.DECREMENT);
	}
};

const getters = {
	count: state => state.count
};

const mutations = {
	[types.INCREMENT](state) {
		state.count++
	},
	[types.DECREMENT](state) {
		state.count--
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}