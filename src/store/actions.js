/**
 * Created by kid on 2016/12/30.
 */
import * as types from './mutation-types';

export default {
	[types.GETDATA]({commit}, parameters) {
		commit(types.GETDATA, parameters);
	}
}