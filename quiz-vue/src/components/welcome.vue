<template>
  <div class="welcome">
    <p>Front End Web Development Quiz</p>
    <button @click="start()">Start</button>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'welcome',
  data: function () {
    return {
      store: store
    }
  },
  methods: {
    start: function () {
      this.store.results.current++
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
