<template>
  <div class="counter">
    Score: {{store.results.correct}}
    Question: {{store.results.current}} / {{store.results.total}}
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'counter',
  data: function () {
    return {
      store: store
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
