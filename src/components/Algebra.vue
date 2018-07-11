<template>
  <div>
    <h2>Linear Algebra</h2>
    <table class="center">
      <tr>
        <td>
          <a target="_blank" href="https://www.amazon.com/Introduction-Linear-Algebra-Gilbert-Strang/dp/0980232775">
            <img src="../assets/algebra.jpg" style="height: 160px">
          </a>
        </td>
        <td>
          <a class="button" target="_blank" href="https://www.youtube.com/playlist?list=PLDhVW-fewH3W4u7cSoMwDBxzEiB2Z84Ht">
            Playlist {{ duration }} 
          </a>
          {{ duration15 }} @ 1.5 speed
          <div id="algebra_chart1"></div>
        </td>
        <td>
          <a class="button" target="_blank" href="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab">
            Playlist {{ duration2 }} 
          </a>
          <div id="algebra_chart2"></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { generateGraph, totalDuration, videoLink } from '../utils'

export default {
  name: 'Algebra',
  data() {
    return {
      items1: [
        {
          "title": "MIT 18.06 Lec 1 The Geometry of Linear Equations",
          "videoId": "ZK3O402wf1c",
          "duration_in_seconds": 2389
        },
        {
          "title": "MIT 18.06 Lec 2 Elimination with Matrices",
          "videoId": "QVKj3LADCnA",
          "duration_in_seconds": 2862
        },
        {
          "title": "MIT 18.06 Lec 3 Multiplication and Inverse Matrices",
          "videoId": "FX4C-JpTFgY",
          "duration_in_seconds": 2809
        },
        {
          "title": "MIT 18.06 Lec 4 Factorization into A = LU",
          "videoId": "MsIvs_6vC38",
          "duration_in_seconds": 2885
        },
        {
          "title": "MIT 18.06 Lec 5 Transposes, Permutations, Spaces R^n",
          "videoId": "JibVXBElKL0",
          "duration_in_seconds": 2862
        },
        {
          "title": "MIT 18.06 Lec 6 Column Space and Nullspace",
          "videoId": "8o5Cmfpeo6g",
          "duration_in_seconds": 2761
        },
        {
          "title": "MIT 18.06 Lec 7 Solving Ax = 0: Pivot Variables, Special Solutions",
          "videoId": "VqP2tREMvt0",
          "duration_in_seconds": 2600
        },
        {
          "title": "MIT 18.06 Lec 8 Solving Ax = b: Row Reduced Form R",
          "videoId": "9Q1q7s1jTzU",
          "duration_in_seconds": 2840
        },
        {
          "title": "MIT 18.06 Lec 9 Independence, Basis, and Dimension",
          "videoId": "yjBerM5jWsc",
          "duration_in_seconds": 3014
        },
        {
          "title": "MIT 18.06 Lec 10 The Four Fundamental Subspaces",
          "videoId": "nHlE7EgJFds",
          "duration_in_seconds": 2960
        },
        {
          "title": "MIT 18.06 Lec 11 Matrix Spaces; Rank 1; Small World Graphs",
          "videoId": "2IdtqGM6KWU",
          "duration_in_seconds": 2756
        },
        {
          "title": "MIT 18.06 Lec 12 Graphs, Networks, Incidence Matrices",
          "videoId": "6-wh6yvk6uc",
          "duration_in_seconds": 2877
        },
        {
          "title": "MIT 18.06 Lec 13 Quiz 1 Review",
          "videoId": "l88D4r74gtM",
          "duration_in_seconds": 2860
        },
        {
          "title": "MIT 18.06 Lec 14 Orthogonal Vectors and Subspaces",
          "videoId": "YzZUIYRCE38",
          "duration_in_seconds": 2988
        },
        {
          "title": "MIT 18.06 Lec 15 Projections onto Subspaces",
          "videoId": "Y_Ac6KiQ1t0",
          "duration_in_seconds": 2931
        },
        {
          "title": "MIT 18.06 Lec 16 Projection Matrices and Least Squares",
          "videoId": "osh80YCg_GM",
          "duration_in_seconds": 2885
        },
        {
          "title": "MIT 18.06 Lec 17 Orthogonal Matrices and Gram-Schmidt",
          "videoId": "uNsCkP9mgRk",
          "duration_in_seconds": 2965
        },
        {
          "title": "MIT 18.06 Lec 18 Properties of Determinants",
          "videoId": "srxexLishgY",
          "duration_in_seconds": 2952
        },
        {
          "title": "MIT 18.06 Lec 19 Determinant Formulas and Cofactors",
          "videoId": "23LLB9mNJvc",
          "duration_in_seconds": 3197
        },
        {
          "title": "MIT 18.06 Lec 20 Cramer's Rule, Inverse Matrix, and Volume",
          "videoId": "QNpj-gOXW9M",
          "duration_in_seconds": 3061
        },
        {
          "title": "MIT 18.06 Lec 21 Eigenvalues and Eigenvectors",
          "videoId": "lXNXrLcoerU",
          "duration_in_seconds": 3083
        },
        {
          "title": "MIT 18.06 Lec 22 Diagonalization and Powers of A",
          "videoId": "13r9QY6cmjc",
          "duration_in_seconds": 3111
        },
        {
          "title": "MIT 18.06 Lec 23 Differential Equations and exp(At)",
          "videoId": "IZqwi0wJovM",
          "duration_in_seconds": 3063
        },
        {
          "title": "MIT 18.06 Lec 24 Markov Matrices; Fourier Series",
          "videoId": "8MF3pz-oYHo",
          "duration_in_seconds": 3072
        },
        {
          "title": "MIT 18.06 Lec 24b Quiz 2 Review",
          "videoId": "sFxA8eIS6tA",
          "duration_in_seconds": 2900
        },
        {
          "title": "MIT 18.06 Lec 25 Symmetric Matrices and Positive Definiteness",
          "videoId": "umt6BB1nJ4w",
          "duration_in_seconds": 2632
        },
        {
          "title": "MIT 18.06 Lec 26 Complex Matrices; Fast Fourier Transform",
          "videoId": "M0Sa8fLOajA",
          "duration_in_seconds": 2872
        },
        {
          "title": "MIT 18.06 Lec 27 Positive Definite Matrices and Minima",
          "videoId": "vF7eyJ2g3kU",
          "duration_in_seconds": 3040
        },
        {
          "title": "MIT 18.06 Lec 28 Similar Matrices and Jordan Form",
          "videoId": "z_zYQHmrh08",
          "duration_in_seconds": 2756
        },
        {
          "title": "MIT 18.06 Lec 29 Singular Value Decomposition",
          "videoId": "Nx0lRBaXoz4",
          "duration_in_seconds": 2495
        },
        {
          "title": "MIT 18.06 Lec 30 Linear Transformations and Their Matrices",
          "videoId": "Ts3o2I8_Mxc",
          "duration_in_seconds": 2967
        },
        {
          "title": "MIT 18.06 Lec 31 Change of Basis; Image Compression",
          "videoId": "vGkn-3NFGck",
          "duration_in_seconds": 3014
        },
        {
          "title": "MIT 18.06 Lec 32 Quiz 3 Review",
          "videoId": "HgC1l_6ySkc",
          "duration_in_seconds": 2826
        },
        {
          "title": "MIT 18.06 Lec 33 Left and Right Inverses; Pseudoinverse",
          "videoId": "Go2aLo7ZOlU",
          "duration_in_seconds": 2513
        },
        {
          "title": "MIT 18.06 Lec 34 Final Course Review",
          "videoId": "RWvi4Vx4CDc",
          "duration_in_seconds": 2606
        }
      ],
      items2: [
        {
          "title": "Essence of linear algebra preview",
          "videoId": "kjBOesZCoqc",
          "duration_in_seconds": 305
        },
        {
          "title": "Vectors, what even are they? | Essence of linear algebra, chapter 1",
          "videoId": "fNk_zzaMoSs",
          "duration_in_seconds": 592
        },
        {
          "title": "Linear combinations, span, and basis vectors | Essence of linear algebra, chapter 2",
          "videoId": "k7RM-ot2NWY",
          "duration_in_seconds": 599
        },
        {
          "title": "Linear transformations and matrices | Essence of linear algebra, chapter 3",
          "videoId": "kYB8IZa5AuE",
          "duration_in_seconds": 659
        },
        {
          "title": "Matrix multiplication as composition | Essence of linear algebra, chapter 4",
          "videoId": "XkY2DOUCWMU",
          "duration_in_seconds": 604
        },
        {
          "title": "Three-dimensional linear transformations | Essence of linear algebra, footnote",
          "videoId": "rHLEWRxRGiM",
          "duration_in_seconds": 286
        },
        {
          "title": "The determinant | Essence of linear algebra, chapter 5",
          "videoId": "Ip3X9LOh2dk",
          "duration_in_seconds": 603
        },
        {
          "title": "Inverse matrices, column space and null space | Essence of linear algebra, chapter 6",
          "videoId": "uQhTuRlWMxw",
          "duration_in_seconds": 729
        },
        {
          "title": "Nonsquare matrices as transformations between dimensions | Essence of linear algebra, footnote",
          "videoId": "v8VSDg_WQlA",
          "duration_in_seconds": 267
        },
        {
          "title": "Dot products and duality | Essence of linear algebra, chapter 7",
          "videoId": "LyGKycYT2v0",
          "duration_in_seconds": 852
        },
        {
          "title": "Cross products | Essence of linear algebra, Chapter 8",
          "videoId": "eu6i7WJeinw",
          "duration_in_seconds": 534
        },
        {
          "title": "Cross products in the light of linear transformations | Essence of linear algebra chapter 8 part 2",
          "videoId": "BaM7OCEm3G0",
          "duration_in_seconds": 790
        },
        {
          "title": "Change of basis | Essence of linear algebra, chapter 9",
          "videoId": "P2LTAUO1TdA",
          "duration_in_seconds": 771
        },
        {
          "title": "Eigenvectors and eigenvalues | Essence of linear algebra, chapter 10",
          "videoId": "PFDu9oVAE-g",
          "duration_in_seconds": 1036
        },
        {
          "title": "Abstract vector spaces | Essence of linear algebra, chapter 11",
          "videoId": "TgKwz5Ikpc8",
          "duration_in_seconds": 1006
        }
      ]
    }
  },
  computed: {
    duration() {
      return totalDuration(this.items1, 1)
    },
    duration15() {
      return totalDuration(this.items1, 1.5)
    },
    duration2() {
      return totalDuration(this.items2, 1)
    },
  },
  methods: {
    video(id) {
      return videoLink(id)
    }
  },
  mounted() {
    generateGraph('#algebra_chart1', this.items1)
    generateGraph('#algebra_chart2', this.items2)
  }
}
</script>
