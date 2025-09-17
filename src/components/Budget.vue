<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import phoneImage from '../assets/img/phone.png'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const alt = t('budget.image-alternative-text')
</script>

<template>
  <div id="orcamento">
    <div class="left-panel">
      <h1>{{ t('budget.section-title') }}</h1>
      <p class="paragraph">{{ t('budget.section-description-one') }}</p>
      <p class="paragraph">{{ t('budget.section-description-two') }}</p>
      <router-link :to="{ name: 'budget' }" replace>
        <a class="btn drop-button button-white mt-5 mb-5">{{ t('button.budget-call') }}</a>
      </router-link>
    </div>
    <div class="right-panel">
      <img class="lozad" :src="phoneImage" :title="alt" alt="Telefone indicativo" />
    </div>
  </div>
</template>

<style scoped>
#orcamento {
  position: relative;
  background-color: var(--main-color);
}
#orcamento::selection {
  background-color: var(--white);
  color: var(--main-color);
}
#orcamento .left-panel {
  margin-left: 15%;
  padding-right: 25%;
  padding-top: 50px;
  margin-top: 100px;
}
#orcamento .left-panel h1 {
  font-family: 'Noah Bold';
}
#orcamento .left-panel h2 {
  color: var(--white);
}
#orcamento .left-panel p {
  color: var(--black);
  font-size: 20px;
  margin-top: 35px;
}
#orcamento .left-panel .paragraph {
  margin-top: 10px;
}
#orcamento .right-panel {
  position: absolute;
  right: 0;
  bottom: -50%;
}
#orcamento .right-panel img {
  width: 650px;
}
@media screen and (max-width: 991px) {
  #orcamento {
    text-align: center;
  }
  #orcamento .left-panel {
    width: 100%;
  }
  #orcamento .right-panel {
    display: none;
  }
}
</style>
