<template>
  <transition name="show-card">
    <md-card  class="card md-primary" :md-theme="status" v-show="store.results.current >= index">
      <md-card-header>
        <div class="md-title">{{qCounter}}: Question #{{index + 1}}</div>
      </md-card-header>

      <md-card-content>
        <code v-html="qData.code"></code>
        <div v-html="qData.question"></div>
      </md-card-content>

      <md-card-actions v-if="store.results.current === index">
        <div class="answer" v-for="(a, i) in qData.answers" :key="i">
          <div class="button">
            <md-button @click="answer(a.correct)">
              <md-icon>done</md-icon>
            </md-button>
          </div>
          <div class="text" v-html="a.answer"></div>
        </div>
        <div class="answer">
          <div class="button">
            <md-button @click="skip" class="skip">
              <md-icon>arrow_downward</md-icon>
            </md-button>
          </div>
          <div class="text">Skip</div>
        </div>
      </md-card-actions>
    </md-card>
  </transition>
</template>

<script>
import store from '../store'

export default {
  name: 'question',
  props: ['qData', 'qCounter', 'index'],
  data: function () {
    return {
      store: store,
      status: 'white-card'
    }
  },
  methods: {
    skip: function () {
      this.store.results.current++
      this.status = 'grey-card'
    },
    answer: function (correct) {
      if (correct) {
        this.store.results[this.qCounter]++
        this.store.results.correct++
        this.status = 'green-card'
      } else {
        this.status = 'red-card'
      }
      this.store.results.current++
    }
  }
}
</script>

<style lang="scss">
  @import "~vue-material/dist/theme/engine";

  @include md-register-theme("white-card", (
    primary: md-get-palette-color(white, 500)
  ));

  @include md-register-theme("green-card", (
    primary: md-get-palette-color(green, 500)
  ));

  @include md-register-theme("red-card", (
    primary: md-get-palette-color(red, 500)
  ));

  @include md-register-theme("grey-card", (
    primary: md-get-palette-color(grey, 500)
  ));

  @import "~vue-material/dist/base/theme";
  @import "~vue-material/dist/components/MdCard/theme";

  // background-color: #4caf50; green
  // background-color: #f44336; red
  // background-color: #9e9e9e; grey
  // background-color: #fff; white

  .card {
    width: 100%;
    margin-bottom: 1rem;

    transform-origin: 50% 0;
    transition: all 200ms ease-out !important;
  }

  .md-card-actions {
    flex-direction: column;
  }

  .answer {
    width: 100%;
    clear: both;
    padding-bottom: 0.5rem;

    display: flex;

    .text {
      padding: 9px 0 0 1rem;
      font-size: 18px;
    }

    .md-button {
      background: #448aff;
      i {color: #fff;}
    }
    .md-button.skip {
      background: #9e9e9e;
    }

  }

  .show-card-enter-active {
    animation: unfold 200ms ease-in-out;
  }

  .hide-buttons-leave-active {
    animation: fold 200ms ease-in-out;
  }

  @keyframes unfold {
    0% {
      transform: scaleY(0)
    }
    100% {
      transform: scaleY(1)
    }
  }
</style>
