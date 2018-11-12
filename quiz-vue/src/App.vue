<template>
  <div id="app">
    <welcome v-if="store.results.current < 0"></welcome>

    <div class="quiz">

      <counter v-if="store.results.current >= 0"></counter>

      <h1 v-if="store.currentSection === 'css'">CSS:</h1>
      <question
        v-for="(q, i) in store.css"
        :q-data="q"
        q-counter="css"
        :index="i"
        :key="i"
      ></question>

      <h1 v-if="store.currentSection === 'html'">HTML:</h1>
      <question
        v-for="(q, i) in store.html"
        :q-data='q'
        q-counter="html"
        :index="i + store.css.length"
        :key="i + store.css.length"
      ></question>

      <h1 v-if="store.currentSection === 'js'">JavaScript:</h1>
      <question
        v-for="(q, i) in store.javascript"
        :q-data='q'
        q-counter="js"
        :index="i + store.css.length + store.html.length"
        :key="i + store.css.length + store.html.length"
      ></question>
    </div>

    <complete
      v-if="store.results.current === store.results.total"
      :totals="[totalCss, totalHtml, totalJS]"
    ></complete>
  </div>
</template>

<script>
import store from '@/store'

import welcome from '@/components/welcome.vue'
import counter from '@/components/counter.vue'
import question from '@/components/question.vue'
import complete from '@/components/complete.vue'

export default {
  name: 'app',
  components: {
    welcome,
    counter,
    question,
    complete
  },
  data: function () {
    return {
      store: store
    }
  },
  computed: {
    totalCss: function () {
      return this.store.css.length
    },
    totalHtml: function () {
      return this.store.html.length
    },
    totalJS: function () {
      return this.store.javascript.length
    },
    totalQ: function () {
      return this.totalCss + this.totalHtml + this.totalJS
    }
  },
  beforeMount: function () {
    this.store.results.total = this.totalQ
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
