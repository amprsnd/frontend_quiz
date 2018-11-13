<template>
  <div class="welcome md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100">
    <div class="logos md-layout md-alignment-center">
      <div class="logo md-layout-item md-medium-size-32 md-small-size-32 md-xsmall-size-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.187 375" height="400" width="285">
          <path fill="#e44d26" d="M242.846 344.838L133.43 375 24.316 344.88 0 73.697h267.187z"/>
          <path fill="#f16529" d="M242.808 95.87H133.594v256.076l88.413-24.373z"/>
          <path fill="#ebebeb" d="M58.741 229.707h74.853v-33.259H89.332l-3.057-34.058h47.319v-33.26H49.719l.801 8.923zM133.594 282.827l-.147.039-37.252-10.002-2.382-26.526H60.236l4.686 52.222 68.518 18.913.154-.042z"/>
          <path d="M24.86 0h16.998v16.7h15.55V0h16.998v50.57H57.408V33.635h-15.55v16.933H24.86V0zM96.76 16.77H81.795V0h46.936v16.77h-14.972v33.8H96.76v-33.8zM136.18 0h17.725l10.903 17.769L175.7 0h17.73v50.57h-16.927V25.503l-11.695 17.98h-.293l-11.703-17.98V50.57H136.18zM201.89 0h17.004v33.854H242.8v16.715H201.89z"/>
          <path fill="#fff" d="M202.554 292.94l7.86-87.56.816-8.932h-77.752v33.26h41.189l-3.883 43.135-37.306 10.012v34.602l68.573-18.897zM216.469 138.053l.8-8.923h-83.79v33.26h80.795l.67-7.476z"/>
        </svg>
      </div>
      <div class="logo md-layout-item md-medium-size-32 md-small-size-32 md-xsmall-size-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.187 375" height="400" width="285">
          <path fill="#264de4" d="M24.316 344.88L0 73.697h267.187l-24.341 271.142L133.43 375z"/>
          <path fill="#2965f1" d="M133.594 95.87v256.076l88.413-24.373L242.808 95.87z"/>
          <path fill="#ebebeb" d="M133.594 229.707v-33.259h-77.85l2.997 33.26zM52.76 162.39h80.834v-33.26H49.719zM64.922 298.56l68.518 18.913.154-.042v-34.604l-.147.039-37.252-10.002-2.382-26.526H60.236z"/>
          <path d="M62.88 0h40.513v16.846h-23.57V33.69h23.57v16.846H62.881zM111.496 0h40.513v14.648h-23.571v2.93h23.57V51.27h-40.512V35.889h23.57v-2.93h-23.57zM160.111 0h40.513v14.648h-23.571v2.93h23.57V51.27h-40.512V35.889h23.571v-2.93h-23.57z"/>
          <path fill="#fff" d="M133.478 196.448v33.26h41.189l-3.883 43.135-37.306 10.012v34.602l68.573-18.897.503-5.62 7.86-87.56.816-8.932 6.039-67.318h-83.79v33.26h47.132l-3.043 34.058z"/>
        </svg>
      </div>
      <div class="logo md-layout-item md-medium-size-32 md-small-size-32 md-xsmall-size-100">
        <svg xmlns="http://www.w3.org/2000/svg" height="400" width="285">
          <path fill="#efc725" d="M142.326 400L25.937 367.88 0 78.684h285l-25.964 289.151z"/>
          <path fill="#fbde34" d="M142.26 375.056l94.309-25.99 22.188-247.094H142.26z"/>
          <path fill="#ebebeb" d="M80.466 262.46H63.958l4.999 55.69 73.084 20.17.165-.046V301.37l-.155.045-39.737-10.669-2.541-28.286zM147.11 152.544l-.098-36.884h-71.04l-2.64 26.145-8.385 93.378-.87 9.524H147.012V209.24h-43.935l5.152-55.665z"/>
          <path fill="#fff" d="M208.51 191.503h16.508l-6.241-68.528-71.842-7.33-.165.045v36.903l.157-.043 38.968 2.332 3.307 36.62z"/>
          <path fill="#fff" d="M221.34 152.702l-3.057-37.042h-75.314v37.042h78.37M142.082 301.402v36.901l73.145-20.153.536-5.992 8.385-93.378.87-9.524H142.083v35.467h43.934l-4.141 46z"/>
          <path fill="#151515" d="M143.026 53.974V39.186h24.596L143.026 12.65V0h49.724v14.807h-23.656l24.602 26.537v12.63z"/>
          <path d="M134.002.024V53.95H90.365V36.126h25.5V.024H134z" fill="#020202"/>
        </svg>
      </div>
    </div>
    <span class="md-display-3">Front End Web Development Quiz</span>
    <span class="md-display-2">HTML, CSS and JavaScript</span>
    <div class="start">
      <md-button class="md-raised md-primary" @click="start()">Start Quiz</md-button>
    </div>
    <p>
      Original test by David Shariff (<a href="http://davidshariff.com/quiz/" target="_blank">http://davidshariff.com/quiz/</a>)<br>
      Remake test by Nikolay Pyatayev (<a href="https://ampersand.pro/quiz/" target="_blank">https://ampersand.pro/quiz/</a>)<br>
      Source on <a href="https://github.com/amprsnd/frontend_quiz" target="_blank">Github.com</a><br>
    </p>
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
  .welcome {
    text-align: center;

    .logos {
      padding: 2rem 0;
    }

    span {
      display: block;
    }

    .start {
      padding: 1rem;
    }
  }
</style>
