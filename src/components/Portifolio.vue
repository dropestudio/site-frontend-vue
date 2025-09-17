<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const portifolioItens = [
  {
    id: 1,
    title: 'Project One',
    image: 'project-one.jpg',
    url: '/job/1',
  },
  {
    id: 2,
    title: 'Project Two',
    image: 'project-two.jpg',
    url: '/job/2',
  },
  {
    id: 2,
    title: 'Project Two',
    image: 'project-two.jpg',
    url: '/job/2',
  },
  {
    id: 2,
    title: 'Project Two',
    image: 'project-two.jpg',
    url: '/job/2',
  },
  {
    id: 2,
    title: 'Project Two',
    image: 'project-two.jpg',
    url: '/job/2',
  },
]
</script>
<template>
  <div id="portfolio">
    <div
      v-if="portifolioItens.length > 0"
      class="portifolio-item"
      v-for="(portfolio_item, index) in portifolioItens"
      :key="index"
    >
      <router-link :to="{ name: 'job', params: { id: portfolio_item['id'] } }" replace>
        <div class="mb-3 mr-3 development">
          <div class="img-container">
            <img
              class="img-fluid portfolio-img lozad"
              data-placeholder-background="#00dddc"
              :data-src="portfolio_item['image']"
              :alt="portfolio_item['title']"
            />
            <div class="overlay">
              <i class="fas fa-expand"></i>
              <p class="img-hover-title">{{ portfolio_item['title'] }}</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
img {
  vertical-align: middle;
  border-style: none;
}
#portfolio {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;
}
#portfolio .portifolio-item .portfolio-img {
  border-radius: 0.2rem;
  width: 400px;
  height: 400px;
}
#portfolio .portifolio-item .development .img-container {
  position: relative;
}
#portfolio .portifolio-item .development .img-container .portfolio-img {
  display: block;
  width: 400px;
  height: 400px;
}
#portfolio .portifolio-item .development .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.3s ease;
  background-color: var(--black);
  color: var(--white);
}
#portfolio .portifolio-item .development .overlay .img-hover-category {
  position: absolute;
  bottom: 0;
  margin-left: 3rem;
  margin-bottom: 8rem;
  font-size: 0.9rem;
}
#portfolio .portifolio-item .development .overlay .img-hover-title {
  position: absolute;
  top: 0;
  margin-left: 15%;
  margin-top: 12rem;
  font-size: 1.3rem;
}
#portfolio .portifolio-item .development .overlay .fas {
  margin-right: 2rem;
  margin-top: 2rem;
  font-size: 2rem;
  float: right;
}
#portfolio .portifolio-item .development .overlay:hover {
  background-color: var(--main-color);
  opacity: 1;
  width: 100%;
  height: 100%;
  transition: opacity 750ms;
}
@media screen and (min-width: 1241px) {
  #portfolio {
    margin-top: -6em;
  }
}
@media screen and (max-width: 990px) {
  #portfolio {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-left: unset;
    margin-right: unset;
  }
}
@media screen and (min-width: 401px) and (max-width: 750px) {
  #portfolio .portifolio-item .development .img-container .portfolio-img {
    width: 400px;
    height: 400px;
  }
}
@media screen and (max-width: 400px) {
  #portfolio .portifolio-item .development .img-container .portfolio-img {
    width: 100%;
  }
}
</style>
