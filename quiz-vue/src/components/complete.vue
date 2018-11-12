<template>
  <div class="result">
    Completed!!!<br>
    Scores: {{store.results.correct}} / {{store.results.total}}<br>
    CSS: {{store.results.css}} / {{totals[0]}} ({{this.css}}%)<br>
    HTML: {{store.results.html}} / {{totals[1]}} ({{this.html}}%)<br>
    JS: {{store.results.js}} / {{totals[2]}} ({{this.js}}%)<br>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'complete',
  props: ['totals'],
  data: function () {
    return {
      store: store
    }
  },
  computed: {
    css: function () {
      return Math.round(this.store.results.css * 100 / this.totals[0])
    },
    html: function () {
      return Math.round(this.store.results.html * 100 / this.totals[1])
    },
    js: function () {
      return Math.round(this.store.results.js * 100 / this.totals[2])
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
