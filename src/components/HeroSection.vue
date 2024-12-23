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
  text-align: center;
  padding: 4rem;
  background-color: $color-gold;
  color: $color-white;

  /* Estilos para el título (h1) */
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  /* Estilos para el subtítulo (p) */
  p {
    font-size: 1.5rem;
  }
}

/* Media query para pantallas más pequeñas */
@media (max-width: 768px) {
  .hero {
    padding: 3rem 2rem; /* Reducir el padding en pantallas más pequeñas */
  }

  h1 {
    font-size: 2.5rem; /* Reducir el tamaño del título */
  }

  p {
    font-size: 1.2rem; /* Reducir el tamaño del subtítulo */
  }
}

/* Media query para pantallas muy pequeñas (móviles en modo vertical) */
@media (max-width: 480px) {
  .hero {
    padding: 2rem 1rem; /* Aumentar el espacio a los lados en dispositivos muy pequeños */
  }

  h1 {
    font-size: 2rem; /* Hacer el título más pequeño en pantallas pequeñas */
  }

  p {
    font-size: 1rem; /* Hacer el subtítulo más pequeño */
  }
}
</style>
