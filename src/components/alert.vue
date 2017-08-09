<template>
	<div class="alert dom-center">
		<span>{{isShow}}</span>
		<span>{{alertCode}}</span>
		<p>{{alertMsg}}</p>
		<button type="button" @click="hideAlert">OK</button>
	</div>
</template>
<style>
	.alert {
	
	}
	
	.alert p {
		padding: 10px;
		text-align: center;
	}
</style>
<script>
	import {mapGetters, mapActions} from 'vuex';
	
	export default {
		computed: mapGetters({
			alertStatus: 'alertStatus',
			fetchState: 'fetchState',
			resultData: 'resultData',
			alertMsg: 'alertMsg',
			alertCode: 'alertCode',
			isShow: 'isShow'
		}),
		methods: mapActions([
			'showAlert',
			'hideAlert'
		])
	}
</script>
