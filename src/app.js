/**
 * Created by kid on 2016/12/23.
 */
import Vue from 'vue';
import app from './app.vue';
import router from './router/index';
import VueRouter from 'vue-router';
import store from './store';

Vue.config.debug = true;//开启错误提示
Vue.use(VueRouter);

new Vue({
	el: '#app',
	router,
	store,
	render: h=> h(app)
});