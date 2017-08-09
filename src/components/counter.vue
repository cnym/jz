<template>
	<div class="counter">
		<p>{{ count }}</p>
		<p>
			<button @click="increment">+</button>
			<button @click="decrement">-</button>
		</p>
	</div>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex';

	export default {
		computed: mapGetters({
			count: 'count'
		}),
		methods: mapActions([
			'increment',
			'decrement'
		])
	}
</script>
