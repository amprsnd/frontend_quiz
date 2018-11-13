<template>
  <vue-scroll :ops="scroll" ref="vs" @handle-resize="scrollBottom">
    <div id="app" class="md-layout md-alignment-center">

      <welcome v-if="store.results.current < 0"></welcome>

      <div class="quiz md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100">

        <counter v-if="store.results.current >= 0"></counter>

        <question
          v-for="(q, i) in store.css"
          :q-data="q"
          q-counter="css"
          :index="i"
          :key="i"
        />

        <question
          v-for="(q, i) in store.html"
          :q-data='q'
          q-counter="html"
          :index="i + store.css.length"
          :key="i + store.css.length"
        />

        <question
          v-for="(q, i) in store.javascript"
          :q-data='q'
          q-counter="js"
          :index="i + store.css.length + store.html.length"
          :key="i + store.css.length + store.html.length"
        />
      </div>

      <complete
        v-if="store.results.current === store.results.total"
        :totals="[totalCss, totalHtml, totalJS]"
      ></complete>
      <div id="scrollHere"></div>
    </div>
  </vue-scroll>
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
      store: store,
      scroll: {
        rail: {
          background: '#fff',
          opacity: 0.2
        },
        bar: {
          background: '#fff'
        }
      }
    }
  },
  mounted: function () {
    let codeBlocks = document.querySelectorAll('pre')
    codeBlocks.forEach(el => {
      // eslint-disable-next-line
      hljs.highlightBlock(el)
    })
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
  methods: {
    scrollBottom: function () {
      this.$refs['vs'].scrollTo({
        y: '100%'
      })
    }
  }
}
</script>

<style lang="scss">
  @import "~vue-material/dist/theme/engine";

  body {
    overflow: hidden;
    min-height: 100vh;
    height: 100%;
  }

  .md-layout {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;.show-card-enter-active {
    animation: unfold 200ms ease-in-out;
  }
    box-sizing: border-box;
    padding: 72px 2rem 2rem 2rem;
  }

  #scrollHere {
    width: 100%;
    clear: both;
  }
</style>
