<template>
  <div>
    <h2>Calculus</h2>
    <a class="button" target="_blank" href="https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr">
      Playlist {{ duration }}
    </a>
    <div id="calculus_chart"></div>
  </div>
</template>

<script>
import { generateGraph, totalDuration, videoLink } from '../utils'

export default {
  name: 'Calculus',
  data() {
    return {
      items: [
        {
          "title": "Essence of calculus, chapter 1",
          "videoId": "WUvTyaaNkzM",
          "duration_in_seconds": 1025
        },
        {
          "title": "The paradox of the derivative | Chapter 2, Essence of calculus",
          "videoId": "9vKqVkMQHKk",
          "duration_in_seconds": 1118
        },
        {
          "title": "Derivative formulas through geometry | Chapter 3, Essence of calculus",
          "videoId": "S0_qX4VJhMQ",
          "duration_in_seconds": 1123
        },
        {
          "title": "Visualizing the chain rule and product rule | Chapter 4, Essence of calculus",
          "videoId": "YG15m2VwSjA",
          "duration_in_seconds": 1012
        },
        {
          "title": "Derivatives of exponentials | Chapter 5, Essence of calculus",
          "videoId": "m2MIpDrF7Es",
          "duration_in_seconds": 830
        },
        {
          "title": "Implicit differentiation, what's going on here? | Chapter 6, Essence of calculus",
          "videoId": "qb40J4N1fa4",
          "duration_in_seconds": 934
        },
        {
          "title": "Limits | Chapter 7, Essence of calculus",
          "videoId": "kfF40MiS7zA",
          "duration_in_seconds": 1107
        },
        {
          "title": "Integration and the fundamental theorem of calculus | Chapter 8, Essence of calculus",
          "videoId": "rfG8ce4nNh0",
          "duration_in_seconds": 1246
        },
        {
          "title": "What does area have to do with slope? | Chapter 9, Essence of calculus",
          "videoId": "FnJqaIESC2s",
          "duration_in_seconds": 759
        },
        {
          "title": "Higher order derivatives | Footnote, Essence of calculus",
          "videoId": "BLkz5LGWihw",
          "duration_in_seconds": 339
        },
        {
          "title": "Taylor series | Chapter 10, Essence of calculus",
          "videoId": "3d6DsjIBzJ4",
          "duration_in_seconds": 1340
        },
        {
          "title": "What they won't teach you in calculus",
          "videoId": "CfW845LNObM",
          "duration_in_seconds": 983
        }
      ]
    }
  },
  computed: {
    duration() {
      return totalDuration(this.items)
    }
  },
  methods: {
    video(id) {
      return videoLink(id)
    }
  },
  mounted() {
    generateGraph('#calculus_chart', this.items)
  }
}
</script>
