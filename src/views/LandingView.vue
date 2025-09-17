<script setup lang="ts">
import Nav from '../components/Nav.vue'
import Home from '../components/Home.vue'
import Portifolio from '../components/Portifolio.vue'
import About from '../components/About.vue'
import Feedback from '../components/Feedback.vue'
import Budget from '../components/Budget.vue'
import Contact from '../components/Contact.vue'
</script>
<template>
  <Nav />
  <main>
    <Home />
    <Portifolio />
    <About />
    <Feedback />
    <Budget />
    <Contact />
    <div class="footer"></div>
  </main>
</template>
<style scoped></style>
