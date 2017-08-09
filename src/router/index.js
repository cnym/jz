/**
 * Created by kid on 2016/12/26.
 */
import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);
Vue.config.debug = true;//开启错误提示

const stopwatch = resolve => {
	require.ensure(['../views/stopwatch.vue'], () => {
		resolve(require('../views/stopwatch.vue'))
	}, 'stopwatch');
};

const index = resolve=> {
	require.ensure(['../views/index.vue'], () => {
		resolve(require('../views/index.vue'))
	}, 'index');
};

const notFound = resolve=> {
	require.ensure(['../views/404.vue'], () => {
		resolve(require('../views/404.vue'))
	}, '404');
};

const routes = [{
		path: '/',
		component: index
	},
	{
		path: '/stopwatch',
		component: stopwatch
	},
	{
		path: '*',
		component: notFound
	}];

export default new VueRouter({
	mode: 'history',
	routes
});