<template>
  <div id="app">
    <AppHeader />
    <HeroSection />
    <ProductsSection />
    <ContactSection />
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import HeroSection from './components/HeroSection.vue';
import ProductsSection from './components/ProductsSection.vue';
import ContactSection from './components/ContactSection.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    HeroSection,
    ProductsSection,
    ContactSection,
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss'; /* Importa las variables SCSS */

#app {
  font-family: 'Arial', sans-serif;
  color: $color-black;
}
</style>
