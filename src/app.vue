<template>
	<div class="app">
		<router-view></router-view>
		<alert v-if="isShow"></alert>
	</div>
</template>
<style>
	* {
		margin: 0;
		padding: 0;
	}

	body {
		color: #3b393d;
		font-family: Avenir, "Helvetica Neue", "Lato", "Segoe UI", Helvetica, Arial, sans-serif;
	}

	.dom-center {
		position: absolute;
		top: 50%;
		left: 50%;

		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
</style>
<script>
	import alert from './components/alert.vue';
	import {mapGetters} from 'vuex';

	export default {
		computed: mapGetters({
			isShow: 'isShow'
		}),
		components: {
			alert
		}
	}
</script>