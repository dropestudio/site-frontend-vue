<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// import { Splide, SplideSlide } from '@splidejs/vue-splide';

const feedbacks = [
  {
    name: 'John Doe',
    image: 'user1.jpg',
    text: 'Great service and support!',
  },
  {
    name: 'Jane Smith',
    image: 'user2.jpg',
    text: 'Highly recommend this company.',
  },
  {
    name: 'Alice Johnson',
    image: 'user3.jpg',
    text: 'Exceptional quality and attention to detail.',
  },
]

const options = {
  type: 'loop',
  perPage: 3,
  autoplay: true,
}
</script>
<template>
  <div class="container" id="feedback" v-if="feedbacks.length > 0">
    <div class="row">
      <div class="col-sm-12 mt-5">
        <p class="sections-title">{{ t('feedback.section-title') }}</p>
      </div>
    </div>
    <!-- <Splide :options="options">
      <SplideSlide v-for="feedback in feedbacks" :key="feedback">
        <div class="feedback mt-4 pt-4 pb-4 mr-3">
            <img class="img-fluid feedback-image lozad" data-placeholder-background="#00dddc" :data-src="feedback.image" :alt="feedback.name">
            <div class="mt-4 feedback-name">{{ feedback.name }}</div>
            <hr>
            <div class="mt-4 p-4 feedback-description">{{ feedback.text }}</div>
        </div>
      </SplideSlide>
    </Splide> -->
  </div>
</template>
<style scoped>
#feedback .sections-title {
  font-size: 3rem;
  text-align: left;
}
#feedback .feedback {
  background: var(--grey-shrink);
  text-align: center;
  color: var(--df-gray);
}
#feedback .feedback .feedback-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
#feedback .feedback hr {
  border: 1px solid var(--main-color);
  width: 75%;
}
#feedback .feedback .feedback-name {
  font-size: 1rem;
}
#feedback .feedback .feedback-description {
  font-size: 0.9rem;
  font-style: italic;
}
#feedback .feedback :hover {
  box-shadow: 2px 2px 2px var(--gray-shadon);
}
@media screen and (max-width: 992px) {
  #feedback .sections-title {
    text-align: center;
  }
}
</style>
