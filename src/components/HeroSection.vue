<template>
  <!-- Sección principal de la landing page (Hero Section) -->
  <section id="hero" class="hero">
    <!-- Título principal de la sección -->
    <h1>Golden Lion</h1>
    <!-- Subtítulo que describe la joyería -->
    <p>La mejor joyería de lujo para ti.</p>
  </section>
</template>

<script>
// Definición del componente 'HeroSection'
export default {
  // Nombre del componente para referencia
  name: "HeroSection",
};
</script>

<style scoped lang="scss">
/* Importa las variables SCSS definidas en un archivo externo */
@import '@/assets/styles/variables.scss';

/* Estilos para la sección Hero */
.hero {
  /* Centra el texto dentro de la sección */
  text-align: center;
  /* Relleno generoso para darle espacio a la sección */
  padding: 4rem;
  /* Color de fondo dorado para la sección */
  background-color: $color-gold;
  /* Color blanco para el texto */
  color: $color-white;

  /* Estilos para el título (h1) */
  h1 {
    /* Tamaño grande para el título */
    font-size: 3rem;
    /* Espaciado debajo del título */
    margin-bottom: 1rem;
  }

  /* Estilos para el subtítulo (p) */
  p {
    /* Tamaño de texto más pequeño que el del título */
    font-size: 1.5rem;
  }
}
</style>
