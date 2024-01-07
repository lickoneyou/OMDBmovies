<template>
  <div class="movie-info-wrap container-sm" v-if="checkWindow">
    <header class="movie-info-header">
      <h6 class="movie-header-title">Movie view</h6>
      <i class="bi bi-x-lg closeBtn" @click="closeWindow"></i>
    </header>
    <div class="movie-info-content">
      <div class="row">
        <div class="col-md-4">
          <div class="movie-poster-wrap">
            <div class="movie-poster" :style="cssProps"></div>
          </div>
        </div>
        <div class="col-md-8">
          <h3 class="movie-title">{{ movieInfo.Title }}</h3>
          <b v-for="item in createStars" :key="item" :class="item"></b>
          <p class="movie-description">{{ movieInfo.Plot }}</p>
          <div class="mt-3 mb-4">
            <span class="badge text-bg-success">{{ movieInfo.Year }}</span>
            <span class="badge text-bg-success">{{ movieInfo.Runtime }}</span>
            <span class="badge text-bg-success">{{ movieInfo.Genre }}</span>
            <span class="badge text-bg-success">{{ movieInfo.Language }}</span>
          </div>
          <table class="table small">
            <tbody>
              <tr>
                <th>Production</th>
                <td>{{ movieInfo.Production }}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{{ movieInfo.Country }}</td>
              </tr>
              <tr>
                <th>Director</th>
                <td>{{ movieInfo.Director }}</td>
              </tr>
              <tr>
                <th>Writer</th>
                <td>{{ movieInfo.Writer }}</td>
              </tr>
              <tr>
                <th>Actors</th>
                <td>{{ movieInfo.Actors }}</td>
              </tr>
              <tr>
                <th>Awards</th>
                <td>{{ movieInfo.Awards }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  data() {
    return {
      openWindow: this.isOpen,
      cssProps: {
        backgroundImage: `url(${this.movieInfo.Poster})`,
      },
      starsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  props: ["isOpen", "movieInfo"],
  methods: {
    closeWindow() {
      this.openWindow = false;
    },
  },
  computed: {
    checkWindow() {
      return this.openWindow;
    },
    createStars() {
      const rait = this.movieInfo.imdbRating;
      const classStarsArray = this.starsArray.map((el, index, arr) => {
        if (el <= rait) {
          return "bi bi-star-fill";
        } else if (el > rait && arr[index - 1] < rait) {
          return "bi bi-star-half";
        } else {
          return "bi bi-star";
        }
      });
      console.log(classStarsArray);
      return classStarsArray;
    },
  },
};
</script>

<style scoped>
.movie-info-wrap {
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.movie-info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(45deg, rgb(0, 3, 38) 0%, rgb(82, 15, 117) 100%);
  color: #fff;
}

.movie-header-title {
  margin-bottom: 0;
  line-height: 1.5;
  font-size: 1.25rem;
}

.movie-info-content {
  padding: 1rem;
  background-color: #fff;
}

.movie-poster-wrap {
  position: relative;
  padding-bottom: 150%;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.movie-poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
}

.movie-title {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.movie-rating {
  padding: 0;
}

.movie-rating:focus {
  box-shadow: none;
}

.movie-rating > .b-rating-star,
.movie-rating > .b-rating-value {
  justify-content: flex-start;
  flex-grow: 0 !important;
  font-size: 1.3rem;
  font-weight: 300;
  padding: 0;
}

.movie-rating > .b-rating-star + .b-rating-star {
  margin-left: 4px;
}

.movie-rating > .b-rating-value {
  margin-left: 10px;
}

.movie-rating > .b-rating-star .b-rating-icon {
  color: #ffc107;
}

.movie-description {
  font-size: 1.25rem;
  font-weight: 300;
}

.close-icon {
  font-size: 24px;
  cursor: pointer;
}

.bi {
  color: yellow;
  font-size: 30px;
  margin-right: 5px;
}

.closeBtn {
  color: white;
  transition: all 200ms ease;
}

.closeBtn:hover {
  color: red;
}

.badge {
  font-size: 15px;
  margin-right: 10px;
}
</style>
