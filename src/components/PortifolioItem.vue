<script setup lang="ts">
const jobItem = {
  id: 1,
  title: 'Project Title',
  type: 'Project Type',
  description:
    'This is a detailed description of the project. It provides insights into the project objectives, methodologies, and outcomes.',
  image: 'project-image.jpg',
}
const jobItens = [
  {
    id: 1,
    title: 'Project Title',
    image: 'project-image.jpg',
  },
  {
    id: 2,
    title: 'Another Project',
    image: 'another-project-image.jpg',
  },
]
</script>
<template>
  <div id="job_item_container">
    <div class="row">
      <div class="col-sm-12 text-right mb-2 top-buttom">
        <button
          type="button"
          class="btn drop-button button-blue"
          onclick="window.location.href='/'"
          data-i18n="button.return"
        ></button>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 presentation">
        <div class="heading-content">
          <p class="description">{{ jobItem.description }}</p>
        </div>
        <div v-for="(jobItem, index) in jobItens" :key="index" class="job-item-image">
          <img class="landing-portifolio-image" :src="jobItem.image" :alt="jobItem.title" />
        </div>
        <div class="info-content">
          <div class="row">
            <div class="col-lg-12">
              <button
                type="button"
                class="btn drop-button button-blue"
                onclick="window.location.href='/'"
                data-i18n="button.return"
              ></button>
              <p class="title text-center">{{ jobItem.title }}</p>
              <p class="description">{{ jobItem.type }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#job_item_container {
  margin-top: 135px;
  max-width: 100% !important;
  .top-buttom {
    margin-right: 5em;
    position: absolute;
    top: 0;
    margin-top: 160px;
    z-index: 10;
  }
  .presentation {
    background-color: $main-background-color !important;
    color: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    .heading-content {
      text-align: center;
      margin-bottom: 9em;
      width: 100%;
      max-width: 980px;
      text-align: justify;
      margin-top: 120px;
    }
    .landing-portifolio-image {
      width: 100%;
      max-width: 1260px;
      border-radius: 0rem;
      margin-bottom: 5rem;
    }
    .landing-portifolio-image:nth-child(n + 2) {
      margin-top: -5rem;
    }
    .info-content {
      text-align: center;
      .title {
        font-size: 2rem;
        margin-top: 2rem;
      }
      .description {
        margin-top: 2rem;
        font-size: 0.9rem;
        line-height: 1.7rem;
        text-align: center;
      }
    }
  }
  .col-lg-12 {
    padding-right: unset !important;
    padding-left: unset !important;
  }
}
@media screen and (max-width: 980px) {
  #job_item_container {
    .presentation {
      .heading-content {
        padding-left: 10%;
        padding-right: 10%;
      }
    }
  }
}

@media screen and (min-width: 401px) and (max-width: 750px) {
  #job_item_container {
    margin-top: 199px;
    .presentation {
      .landing-portifolio-image {
        margin-left: unset;
      }
      .landing-portifolio-image:nth-child(1) {
        margin-top: -4rem;
      }
      .info-content {
        padding-left: 1em;
        padding-right: 1em;
        height: 150px;
      }
    }
  }
}

@media screen and (min-width: 1190px) {
  #job_item_container {
    text-align: center;
  }
}
</style>
