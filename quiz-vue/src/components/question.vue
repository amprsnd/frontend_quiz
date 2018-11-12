<template>
  <div :class="status" v-if="store.results.current >= index">
    {{qCounter}}: Question #{{index + 1}}
    <div v-html="qData.code"></div>
    <div v-html="qData.question"></div>
    <div class="answers" v-if="store.results.current === index">
      <button
        v-for="(a, i) in qData.answers"
        :key="i"
        @click="answer(a.correct)"
      >
      {{a.answer}}
      </button>

      <button class="skip" @click="skip">Skip</button>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'question',
  props: ['qData', 'qCounter', 'index'],
  data: function () {
    return {
      store: store,
      status: ''
    }
  },
  methods: {
    skip: function () {
      this.store.results.current++
      this.status = 'skipped'
    },
    answer: function (correct) {
      if (correct) {
        this.store.results[this.qCounter]++
        this.store.results.correct++
        this.status = 'correct'
      } else {
        this.status = 'incorrect'
      }
      this.store.results.current++
    }
  }
}
</script>

<style lang="scss">
  .correct {
    background: #00ff00;
  }
  .incorrect {
    background: #ff0000;
  }
  .skipped {
    background: #929292;
  }
</style>
