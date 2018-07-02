<template>
  <div>
    <h2>Machine Learning</h2>
    <a class="button" target="_blank" href="https://www.youtube.com/playlist?list=PLDhVW-fewH3X6rVcyUaFxCAbGAI3emqY-">
      Playlist {{ duration }}
    </a>
    <div id="ml_chart"></div>
  </div>
</template>

<script>
import { generateGraph, totalDuration, videoLink } from '../utils'

export default {
  name: 'MachineLearning',
  data() {
    return {
      items: [
        {
          "title": "Machine Learning 1: Lesson 1",
          "videoId": "CzdWqFTmn0Y",
          "duration_in_seconds": 4661
        },
        {
          "title": "Machine Learning 1 Lesson 2",
          "videoId": "blyXCk4sgEg",
          "duration_in_seconds": 5691
        },
        {
          "title": "Machine Learning 1 Lesson 3",
          "videoId": "YSFG_W8JxBo",
          "duration_in_seconds": 5023
        },
        {
          "title": "Machine Learning 1 Lesson 4",
          "videoId": "0v93qHDqq_g",
          "duration_in_seconds": 6005
        },
        {
          "title": "Machine Learning 1 Lesson 5",
          "videoId": "3jl2h9hSRvc",
          "duration_in_seconds": 5913
        },
        {
          "title": "Machine Learning 1 Lesson 6",
          "videoId": "BFIYUvBRTpE",
          "duration_in_seconds": 6104
        },
        {
          "title": "Machine Learning 1: Lesson 7",
          "videoId": "O5F9vR2CNYI",
          "duration_in_seconds": 5287
        },
        {
          "title": "Machine Learning 1: Lesson 8",
          "videoId": "DzE0eSdy5Hk",
          "duration_in_seconds": 5626
        },
        {
          "title": "Machine Learning 1: Lesson 9",
          "videoId": "PGC0UxakTvM",
          "duration_in_seconds": 5389
        },
        {
          "title": "Machine Learning 1: Lesson 10",
          "videoId": "37sFIak42Sc",
          "duration_in_seconds": 5957
        },
        {
          "title": "Machine Learning 1: Lesson 11",
          "videoId": "XJ_waZlJU8g",
          "duration_in_seconds": 5767
        },
        {
          "title": "Machine Learning 1: Lesson 12",
          "videoId": "5_xFdhfUnvQ",
          "duration_in_seconds": 6102
        }
      ]
    }
  },
  computed: {
    duration() {
      return totalDuration(this.items, 1)
    }
  },
  methods: {
    video(id) {
      return videoLink(id)
    }
  },
  mounted() {
    generateGraph('#ml_chart', this.items)
  }
}
</script>
