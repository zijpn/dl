<template>
  <div>
    <h2>Deep Learning</h2>
    <a class="button" target="_blank" href="https://www.youtube.com/playlist?list=PLDhVW-fewH3WmQgzrNAGGCgtehi5B2Gp1">
      Playlist {{ duration }}
    </a>
    <div id="dl_chart"></div>
  </div>
</template>

<script>
import { generateGraph, totalDuration, videoLink } from '../utils'

export default {
  name: 'DeepLearning',
  data() {
    return {
      items: [
        {
          "title": "Lesson 1: Deep Learning 2018",
          "videoId": "IPBSB1HLNLo",
          "duration_in_seconds": 5195
        },
        {
          "title": "Lesson 2: Deep Learning 2018",
          "videoId": "JNxcznsrRb8",
          "duration_in_seconds": 7650
        },
        {
          "title": "Lesson 3: Deep Learning 2018",
          "videoId": "9C06ZPF8Uuc",
          "duration_in_seconds": 8198
        },
        {
          "title": "Lesson 4: Deep Learning 2018",
          "videoId": "gbceqO8PpBg",
          "duration_in_seconds": 8072
        },
        {
          "title": "Lesson 5: Deep Learning 2018",
          "videoId": "J99NV9Cr75I",
          "duration_in_seconds": 8319
        },
        {
          "title": "Lesson 6: Deep Learning 2018",
          "videoId": "sHcLkfRrgoQ",
          "duration_in_seconds": 8023
        },
        {
          "title": "Lesson 7: Deep Learning 2",
          "videoId": "H3g26EVADgY",
          "duration_in_seconds": 8251
        },
        {
          "title": "Lesson 8: Deep Learning Part 2 2018 - Single object detection",
          "videoId": "Z0ssNAbe81M",
          "duration_in_seconds": 7275
        },
        {
          "title": "Lesson 9: Deep Learning Part 2 2018 - Multi-object detection",
          "videoId": "0frKXR-2PBY",
          "duration_in_seconds": 7534
        },
        {
          "title": "Lesson 10: Deep Learning Part 2 2018 - NLP Classification and Translation",
          "videoId": "h5Tz7gZT9Fo",
          "duration_in_seconds": 7676
        },
        {
          "title": "Lesson 11: Deep Learning Part 2 2018 - Neural Translation",
          "videoId": "tY0n9OT5_nA",
          "duration_in_seconds": 8158
        },
        {
          "title": "Lesson 12: Deep Learning Part 2 2018 - Generative Adversarial Networks (GANs)",
          "videoId": "ondivPiwQho",
          "duration_in_seconds": 8275
        },
        {
          "title": "Lesson 13: Deep Learning Part 2 2018 - Image Enhancement",
          "videoId": "xXXiC4YRGrQ",
          "duration_in_seconds": 8128
        },
        {
          "title": "Lesson 14: Deep Learning Part 2 2018 - Super resolution; Image segmentation with Unet",
          "videoId": "nG3tT31nPmQ",
          "duration_in_seconds": 7370
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
    generateGraph('#dl_chart', this.items)
  }
}
</script>
