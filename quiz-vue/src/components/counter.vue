<template>
  <md-toolbar class="md-accent counter" md-elevation="1">
      <h3 class="md-title" style="flex: 1">Quiz</h3>
      <span>Score: <b>{{store.results.correct}}</b></span>
      <span>Question: <b>{{store.results.current}} / {{store.results.total}}</b></span>
    </md-toolbar>
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
  .counter {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    text-transform: uppercase;
    font-weight: 300;

    .md-title {
      text-transform: capitalize;
    }

    span {
      padding-left: 0.5rem;
    }
  }
</style>
