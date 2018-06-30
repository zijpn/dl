<template>
  <div>
    <h1>Calculus</h1>
    <a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr">playlist</a>
    Total Duration: {{ totalDuration }}
    <div id="chart"></div>
     <ul v-for="item in items" :key="item.videoId">
      {{ item.title }}
      <a target="_blank" :href=thumbnail(item.videoId)>thumbnail</a> &nbsp;
      <a target="_blank" :href=video(item.videoId)>video</a>
    </ul>
  </div>
</template>

<script>
import c3 from 'c3'

function formatDuration(seconds) {
  let date = new Date(null)
  date.setSeconds(seconds)
  let timeString = date.toISOString().substr(11, 8)
  return timeString
}

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
    totalDuration() {
      let seconds = 0
      for (let item of this.items) {
        seconds += item.duration_in_seconds
      }
      return formatDuration(seconds)
    }
  },
  methods: {
    thumbnail(i) {
      return `https://i.ytimg.com/vi/${i}/default.jpg`
    },
    video(i) {
      return `https://www.youtube.com/watch?v=${i}`
    }
  },
  mounted() {
    c3.generate({
      bindto: '#chart',
      data: {
        json: this.items,
        keys: {
          value: ['duration_in_seconds']
        },
        types:{
          duration_in_seconds: 'bar'
        },
        colors: {
          duration_in_seconds: '#dedede'
        },
        names: {
          duration_in_seconds: 'Duration'
        }
      },
      axis: {
        x: {
          tick: {
            format: i => i+1
          }
        },
        y: {
          tick: {
            format: seconds => formatDuration(seconds)
          }
        }
      },
      tooltip: {
        format: {
          title: i => this.items[i].title
        }
      },
      bar:{
        width: {
          ratio: 0.7
        }
      }
    })
  }
}
</script>

<style scoped>
</style>
