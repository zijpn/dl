<template>
  <div>
    <h2>Probability</h2>
    <a class="button" target="_blank" href="https://www.youtube.com/playlist?list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo">
      Playlist {{ duration }}
    </a>
    <div id="probability_chart"></div>
  </div>
</template>

<script>
import { generateGraph, totalDuration, videoLink } from '../utils'

export default {
  name: 'Probability',
  data() {
    return {
      items: [
        {
          "title": "Lecture 1: Probability and Counting | Statistics 110",
          "videoId": "KbB0FjPg0mw",
          "duration_in_seconds": 2789,
        },
        {
          "title": "Lecture 2: Story Proofs, Axioms of Probability | Statistics 110",
          "videoId": "FJd_1H3rZGg",
          "duration_in_seconds": 2740,
        },
        {
          "title": "Lecture 3: Birthday Problem, Properties of Probability | Statistics 110",
          "videoId": "LZ5Wergp_PA",
          "duration_in_seconds": 2935,
        },
        {
          "title": "Lecture 4: Conditional Probability | Statistics 110",
          "videoId": "P7NE4WF8j-Q",
          "duration_in_seconds": 2985,
        },
        {
          "title": "Lecture 5: Conditioning Continued, Law of Total Probability | Statistics 110",
          "videoId": "JzDvVgNDxo8",
          "duration_in_seconds": 3002,
        },
        {
          "title": "Lecture 6: Monty Hall, Simpson's Paradox | Statistics 110",
          "videoId": "fDcjhAKuhqQ",
          "duration_in_seconds": 2941,
        },
        {
          "title": "Lecture 7: Gambler's Ruin and Random Variables | Statistics 110",
          "videoId": "PNrqCdslGi4",
          "duration_in_seconds": 3106,
        },
        {
          "title": "Lecture 8: Random Variables and Their Distributions | Statistics 110",
          "videoId": "k2BB0p8byGA",
          "duration_in_seconds": 3024,
        },
        {
          "title": "Lecture 9: Expectation, Indicator Random Variables, Linearity | Statistics 110",
          "videoId": "LX2q356N2rU",
          "duration_in_seconds": 3023,
        },
        {
          "title": "Lecture 10: Expectation Continued | Statistics 110",
          "videoId": "P1fSFvhPf7Q",
          "duration_in_seconds": 3010,
        },
        {
          "title": "Lecture 11: The Poisson distribution | Statistics 110",
          "videoId": "TD1N4hxqMzY",
          "duration_in_seconds": 2566,
        },
        {
          "title": "Lecture 12: Discrete vs. Continuous, the Uniform | Statistics 110",
          "videoId": "Tci---bVs60",
          "duration_in_seconds": 2996,
        },
        {
          "title": "Lecture 13: Normal distribution | Statistics 110",
          "videoId": "72QjzHnYvL0",
          "duration_in_seconds": 3070,
        },
        {
          "title": "Lecture 14: Location, Scale, and LOTUS | Statistics 110",
          "videoId": "9vp1Ll2NpRw",
          "duration_in_seconds": 2935,
        },
        {
          "title": "Lecture 15: Midterm Review | Statistics 110",
          "videoId": "yFRZf81sB5k",
          "duration_in_seconds": 2292,
        },
        {
          "title": "Lecture 16: Exponential Distribution | Statistics 110",
          "videoId": "bM6nFDjvEns",
          "duration_in_seconds": 1100,
        },
        {
          "title": "Lecture 17: Moment Generating Functions | Statistics 110",
          "videoId": "N8O6zd6vTZ8",
          "duration_in_seconds": 3045,
        },
        {
          "title": "Lecture 18: MGFs Continued | Statistics 110",
          "videoId": "tVDdx6xUOcs",
          "duration_in_seconds": 2981,
        },
        {
          "title": "Lecture 19: Joint, Conditional, and Marginal Distributions | Statistics 110",
          "videoId": "J70dP_AECzQ",
          "duration_in_seconds": 3009,
        },
        {
          "title": "Lecture 20: Multinomial and Cauchy | Statistics 110",
          "videoId": "xiVWNkQUqKk",
          "duration_in_seconds": 2940,
        },
        {
          "title": "Lecture 21: Covariance and Correlation | Statistics 110",
          "videoId": "IujCYxtpszU",
          "duration_in_seconds": 2966,
        },
        {
          "title": "Lecture 22: Transformations and Convolutions | Statistics 110",
          "videoId": "yXwPUAIvFyg",
          "duration_in_seconds": 2866,
        },
        {
          "title": "Lecture 23: Beta distribution | Statistics 110",
          "videoId": "UZjlBQbV1KU",
          "duration_in_seconds": 2988,
        },
        {
          "title": "Lecture 24: Gamma distribution and Poisson process | Statistics 110",
          "videoId": "Qjeswpm0cWY",
          "duration_in_seconds": 2929,
        },
        {
          "title": "Lecture 25: Order Statistics and Conditional Expectation | Statistics 110",
          "videoId": "2LR5JYbhyjg",
          "duration_in_seconds": 2895,
        },
        {
          "title": "Lecture 26: Conditional Expectation Continued | Statistics 110",
          "videoId": "PgawcWisb0I",
          "duration_in_seconds": 2993,
        },
        {
          "title": "Lecture 27: Conditional Expectation given an R.V. | Statistics 110",
          "videoId": "gjBvCiRt8QA",
          "duration_in_seconds": 3034,
        },
        {
          "title": "Lecture 28: Inequalities | Statistics 110",
          "videoId": "UtXK_EQ3Pow",
          "duration_in_seconds": 2849,
        },
        {
          "title": "Lecture 29: Law of Large Numbers and Central Limit Theorem | Statistics 110",
          "videoId": "OprNqnHsVIA",
          "duration_in_seconds": 2988,
        },
        {
          "title": "Lecture 31: Markov Chains | Statistics 110",
          "videoId": "8AJPs3gvNlY",
          "duration_in_seconds": 2798,
        },
        {
          "title": "Lecture 30: Chi-Square, Student-t, Multivariate Normal | Statistics 110",
          "videoId": "MF-XSJOsGqw",
          "duration_in_seconds": 2848,
        },
        {
          "title": "Lecture 32: Markov Chains Continued | Statistics 110",
          "videoId": "aBGOyZv2pZE",
          "duration_in_seconds": 2904,
        },
        {
          "title": "Lecture 33: Markov Chains Continued Further | Statistics 110",
          "videoId": "Q-pCzTpwPBU",
          "duration_in_seconds": 2821,
        },
        {
          "title": "Lecture 34: A Look Ahead | Statistics 110",
          "videoId": "ChS3K2O-h7o",
          "duration_in_seconds": 2219,
        },
        {
          "title": "Joseph Blitzstein: \"The Soul of Statistics\" | Harvard Thinks Big 4",
          "videoId": "dzFf3r1yph8",
          "duration_in_seconds": 887,
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
    generateGraph('#probability_chart', this.items)
  }
}
</script>
