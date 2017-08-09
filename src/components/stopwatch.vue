<template>
	<div>
		<h1>秒表</h1>
		<div class="stop-watch">
			<span class="minute">{{minute}}</span>
			<em>:</em>
			<span class="second">{{second}}</span>
			<em>.</em>
			<span class="second">{{millisecond}}</span>
		</div>
		<div>
			<button type="button" @click="getData" :disabled="fetchState">getData</button>
			<button v-if="status == 'stop'" type="button" disabled>重置</button>
			<button v-else type="button" @click="resetStopwatch">重置</button>
			<button v-if="status == 'stop' || status == 'pause'" @click="startStopwatch">启动</button>
			<button v-else @click="pauseStopwatch">暂停</button>
			<button type="button" @click="request" :disabled="fetchState">request</button>
		</div>
	</div>
</template>
<style>
	.stop-watch span, .stop-watch em {
		display: inline-block;
		vertical-align: middle;
		font-size: 14px;
		line-height: 16px;
	}
	
	.stop-watch em {
		font-style: normal;
	}

</style>
<script>
	import {mapGetters, mapActions} from 'vuex';
	
	export default {
		computed: mapGetters({
			minute: 'minute',
			second: 'second',
			millisecond: 'millisecond',
			status: 'status',
			fetchState: 'fetchState',
			resultData: 'resultData'
		}),
		methods: {
			...mapActions([
				'startStopwatch',
				'resetStopwatch',
				'pauseStopwatch'
			]),
			getData() {
				this.$store.dispatch('getData', {
					url: '/api/test',
					data: {
						uri: 'findConfigAll'
					}
				});
			},
			request(){
				this.$store.dispatch('getData', {
					url: '/aptest',
					data: {
						url: 'ss'
					}
				})
			}
		}
	}
</script>