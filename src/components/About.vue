<script setup lang="ts">
import image from '../assets/img/about.png'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <div class="container-full mb-5" id="about">
    <div class="row">
      <div class="col-lg-6">
        <img :src="image" class="about-img lozad" alt="about img" />
      </div>
      <div class="col-lg-6">
        <div class="row">
          <div class="col-lg-2 about-right"></div>
          <div class="col-lg-6 about-left">
            <p class="sections-title mt-4 mb-3">{{ t('about.section-title') }}</p>
            <p class="">
              <span>{{ t('about.description_1') }}</span>
              <br /><br />
              <span>{{ t('about.description_2') }}</span>
              <br /><br />
              <span>{{ t('about.description_3') }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#about .about-img {
  width: 60%;
  float: right;
  margin-right: 2rem;
  margin-top: 5rem;
  border-radius: 1rem;
  box-shadow:
    0px 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 5px 20px 0px rgba(0, 0, 0, 0.4);
}
#about .about-left {
  padding: 2rem;
}
#about .about-left .sections-title {
  font-size: 4rem;
}
#about .about-left .sections-title .description {
  font-size: 0.9rem;
  line-height: 1.7rem;
}
#about .about-right {
  padding: 2rem;
}
@media screen and (max-width: 991px) {
  #about .about-img {
    margin-right: 11rem;
  }
}
</style>
