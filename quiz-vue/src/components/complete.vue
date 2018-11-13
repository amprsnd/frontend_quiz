<template>
  <md-card class="complete">
    <md-card-header>
      <div class="md-title">Congratulations! Quiz is finished!</div>
      <div class="md-subhead">Your results:</div>
    </md-card-header>

    <md-card-content>
      <span class="md-headline">
        Total Scores: {{store.results.correct}} / {{store.results.total}}
      </span>
      <br>
      <br>
      CSS: {{store.results.css}} / {{totals[0]}} ({{this.css}}%)<br>
      <md-progress-bar md-mode="determinate" :md-value="css"></md-progress-bar>
      HTML: {{store.results.html}} / {{totals[1]}} ({{this.html}}%)<br>
      <md-progress-bar md-mode="determinate" :md-value="html"></md-progress-bar>
      JS: {{store.results.js}} / {{totals[2]}} ({{this.js}}%)<br>
      <md-progress-bar md-mode="determinate" :md-value="js"></md-progress-bar>
      <span class="md-display-1">Thank you!</span>
    </md-card-content>
  </md-card>
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

  .complete {
    width: 100%;
    margin-bottom: 1rem;
  }
  .md-progress-bar {
    margin-bottom: 1rem;
  }
</style>
