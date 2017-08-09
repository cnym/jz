/**
 * Created by kid on 2017/1/13.
 */
import alertTpl from './alert.vue';

export default {
	install(Vue) {
		Vue.prototype.myName = 'kid';
		Vue.prototype.test = (val)=> {
			console.log(val);
			val ? console.log(val) : console.log(Vue.prototype.myName);
		};

		Vue.prototype.alert = null;

		Vue.directive('alertMsg', {
			bind() {
				let alertVue = Vue.extend({
					template: alertTpl
				});

				Vue.alert = (new alertVue()).$mount().$el;
			}
		});
	}
}