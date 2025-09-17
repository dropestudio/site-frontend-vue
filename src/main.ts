import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import '@splidejs/splide/dist/css/splide.min.css'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

import App from './App.vue'
import router from './router'

import pt from './locales/pt.json'
import en from './locales/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages: { pt, en },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.component('Splide', Splide)
app.component('SplideSlide', SplideSlide)

app.mount('#app')
