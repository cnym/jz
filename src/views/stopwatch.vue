<template>
    <div class="stopwatch">
        <stopwatch></stopwatch>
    </div>
</template>
<style>
.stopwatch {
    color: #666;
}
</style>
<script>
import stopwatch from '../components/stopwatch.vue';
import alert from '../components/alert.vue';

export default {
  components: {
    stopwatch,
    alert
  }
}
</script>