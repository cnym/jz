<template>
    <div class="index">
        <router-link to="/stopwatch">to stopwatch</router-link>
        <counter></counter>
    </div>
</template>
<style>
.text {
    font-size: 16px;
}
</style>
<script>
import counter from '../components/counter.vue';

export default {
  components: {
    counter
  }
}
</script>