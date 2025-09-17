<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import homeImage from '../assets/img/home.webp'
import whatsLogo from '../assets/icon/whats.svg'
</script>
<template>
  <div id="home-container" class="container-full lozad" :data-image="homeImage">
    <div id="home" :style="{ backgroundImage: 'url(' + homeImage + ')' }">
      <div class="row row-home">
        <div class="home-left">
          <p class="main-name">{{ t('home.title') }}</p>
          <p class="occupation">{{ t('home.description') }}</p>
          <p class="button-group">
            <button
              type="button"
              class="btn drop-button button-blue mr-5"
              onclick="window.location.href='#portfolio'"
            >
              {{ t('button.portfolio') }}
            </button>
            <a
              href="https://wa.me/555491928877?text=Oi%20Reinaldo,%20tudo%20bem?%20Estou%20entrando%20em%20contato%20contigo%20através%20do%20teu%20site"
              target="_blank"
              :title="t('home.cta-message')"
            >
              <img class="home-whats-link" :src="whatsLogo" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#home-container {
  background-color: rgb(18, 18, 18);
  margin-top: 50px;
}
#home-container #home {
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
#home-container #home .row-home {
  padding-top: 10em;
  margin-left: 17%;
  margin-right: 10%;
}
#home-container #home .row-home .home-left .main-name {
  font-size: 6rem;
  font-family: 'Morganite-ExtraBold';
  line-height: 1em;
  letter-spacing: 3px;
}
#home-container #home .row-home .home-left .occupation {
  font-size: 1.1rem;
  margin-top: 2rem;
  margin-bottom: 3.2rem;
  height: 50px;
}
#home-container #home .row-home .home-left .occupation .button-group a img {
  width: 140px;
  color: var(--white);
}
#home-container #home .row-home .home-left .occupation .button-group a img:hover {
  color: var(--main-color);
}
.home-whats-link {
  width: 50px;
  color: var(--white);
}
.home-whats-link:hover {
  color: var(--main-color);
}
@media (min-width: 992px) {
  #home .row-home .home-left {
    width: 60%;
  }
}
@media (max-width: 991px) {
  #home .row-home {
    margin-right: 5%;
  }
  #home .row-home .home-left .main-name {
    text-align: left;
  }
}
@media (max-width: 431px) {
  #home .row-home {
    height: 120vh;
  }
}
</style>
