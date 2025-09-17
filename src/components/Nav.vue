<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
locale.value = 'pt'

const menuItens = [
  {
    title: t('menu.home'),
    link: '/home',
  },
  {
    title: t('menu.portifolio'),
    link: '/#portfolio',
  },
  {
    title: t('menu.about'),
    link: '/#about',
  },
  {
    title: t('menu.budget'),
    link: '/#orcamento',
  },
  {
    title: t('menu.contact'),
    link: '/#contact',
  },
]
const logoConfiguration = {
  alt: 'Logo RCP',
  width: '100px',
  height: '105px',
}
import logo from '../assets/img/logo.png'
</script>
<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <a class="navbar-brand" :href="menuItens[0].link">
      <img
        class="e-nav-logo"
        :src="logo"
        :alt="logoConfiguration.alt"
        :width="logoConfiguration.width"
        :height="logoConfiguration.height"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navigationBar"
      aria-controls="navigationBar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navigationBar">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-for="(item, index) in menuItens" :key="index">
          <a class="nav-link" :href="item.link">
            {{ item.title }}
          </a>
        </li>
        <li class="nav-item">
          <select class="nav-link" name="language" id="switch_language">
            <option value="pt">PT</option>
            <option value="en">EN</option>
          </select>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
.navbar-dark {
  padding-left: 10rem;
  padding-right: 5rem;
  padding-top: 30px;
  font-size: 1rem;
  height: 8rem;
  transition: 500ms ease;
  background: transparent !important;
  transition: 0.5s;
}
.nav-link {
  color: var(--white) !important;
  margin-right: 2.5rem;
  font-size: 1rem;
}
.nav-link:hover {
  color: var(--main-color) !important;
}
.active {
  color: var(--main-color) !important;
}
/* .shrink{
    height:7rem;
    padding-top:15px;
    background-color:#1f1f1f !important;
    box-shadow:0px 0px 0px 0px rgba(0,0,0,0.2),0px 5px 20px 0px rgba(0,0,0,0.05)
}
.shrink .nav-link{
    color:var(--white) !important
}
.shrink .active{
    color:var(--main-color) !important
}
.shrink .active:hover{
    color:var(--main-color) !important
}
.shrink .navbar-brand{
    font-size:2.5rem;
    transition:0.5s
} */
.navbar-brand {
  font-size: 3rem;
  color: var(--white);
  text-transform: none;
  transition: 0.5s;
}
.navbar-brand > .e-nav-logo {
  max-width: 100px;
  color: var(--white);
}
.collapse {
  transition: 0.2s;
  padding: 2rem;
}
@media screen and (max-width: 991px) {
  .collapse {
    background-color: #000;
  }
  .e-nav-logo {
    margin-top: -15px;
  }
  .navbar-toggler {
    margin-top: -17px;
  }
}
@media screen and (max-width: 1050px) {
  .navbar-dark {
    padding-left: 2rem;
  }
}
@media screen and (max-width: 364px) {
  .navbar-brand {
    font-size: 1.4rem !important;
  }
}
</style>
