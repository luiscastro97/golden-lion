<template>
  <!-- Componente de cabecera del sitio -->
  <header class="header">
    <!-- Logo del sitio, en este caso el texto 'Golden Lion' -->
    <div class="logo">
      <img src="@/assets/images/logo.jpg" alt="Logo de Golden Lion">
    </div>

    <!-- Icono del menú hamburguesa -->
    <div class="hamburger" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>

    <!-- Barra de navegación con enlaces a las secciones de la página -->
    <nav :class="{ 'active': isMenuVisible }">
      <!-- Enlaces a las diferentes secciones de la landing page -->
      <a href="#hero" @click="closeMenu">Inicio</a>
      <a href="#products" @click="closeMenu">Productos</a>
      <a href="#contact" @click="closeMenu">Contacto</a>
    </nav>
  </header>
</template>

<script>
// Definición del componente de Vue.js
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuVisible: false, // Estado para controlar la visibilidad del menú
    };
  },
  methods: {
    // Cambia el estado del menú al hacer clic en el icono hamburguesa
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    // Cierra el menú cuando se hace clic en un enlace
    closeMenu() {
      this.isMenuVisible = false;
    },
  },
};
</script>

<style scoped lang="scss">
/* Importa las variables SCSS definidas en un archivo externo */
@import '@/assets/styles/variables.scss';

/* Estilos para el componente de cabecera */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: $color-black;
  color: $color-gold;
  position: relative; /* Asegura que el menú hamburguesa se posicione correctamente */
}

/* Estilos para el logo */
.logo img {
  width: auto;
  height: 100px;
  max-height: 200px;
}

/* Estilos para los enlaces de navegación */
nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  margin: 0 1rem;
  color: $color-gold;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

nav a:hover {
  text-decoration: underline;
}

/* Estilos para el icono del menú hamburguesa */
.hamburger {
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 3px;
  justify-content: space-between;
  width: 30px;
  height: 22px;
}

.hamburger .bar {
  background-color: $color-gold;
  height: 4px;
  width: 100%;
  border-radius: 5px;
}

/* Media query para pantallas pequeñas */
@media (max-width: 768px) {
  /* Mostrar el icono hamburguesa en pantallas pequeñas */
  .hamburger {
    display: flex;
  }

  /* Estilos para el menú de navegación en pantallas pequeñas */
  nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 0;
    right: 0;
    background-color: $color-black;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    transform: translateX(100%); /* Menú oculto inicialmente */
    transition: transform 0.3s ease;
    padding-top: 3rem;
  }

  /* Estilo para mostrar el menú cuando se activa */
  nav.active {
    transform: translateX(0); /* Mostrar el menú */
  }

  nav a {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  .logo img {
    height: 70px;
    max-height: 120px;
  }
}

/* Media query para pantallas grandes */
@media (min-width: 769px) {
  nav {
    display: flex;
    gap: 2rem; /* Aumentar espacio entre los enlaces */
  }

  .hamburger {
    display: none; /* Ocultar el icono hamburguesa en pantallas grandes */
  }
}
</style>
