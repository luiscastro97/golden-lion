<template>
  <!-- Componente de cabecera del sitio -->
  <header class="header">
    <!-- Logo del sitio -->
    <div class="logo">
      <img src="@/assets/images/logo.jpg" alt="Logo de Golden Lion">
    </div>

    <!-- Botón de menú hamburguesa para pantallas pequeñas -->
    <div class="hamburger" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>

    <!-- Barra de navegación -->
    <nav :class="{ 'active': isMenuVisible }">
      <!-- Enlaces a las diferentes secciones de la landing page -->
      <a href="#hero" @click="closeMenu">Inicio</a>
      <a href="#products" @click="closeMenu">Productos</a>
      <a href="#contact" @click="closeMenu">Contacto</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      // Variable para controlar la visibilidad del menú
      isMenuVisible: false,
    };
  },
  methods: {
    // Método que alterna la visibilidad del menú
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    // Método para cerrar el menú al hacer clic en un enlace
    closeMenu() {
      this.isMenuVisible = false;
    },
  },
};
</script>

<style scoped lang="scss">
/* Estilos generales para la cabecera */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem; /* Reducir el padding para hacerlo más compacto */
  background-color: #000;
  color: #ffd700; /* Color dorado */
  position: relative;
}

/* Logo */
.logo img {
  width: auto;
  height: 80px; /* Reducir el tamaño del logo */
  max-height: 150px;
}

/* Estilos para los enlaces en el menú */
nav {
  display: flex;
  gap: 0.5rem; /* Reducir el espacio entre los enlaces */
  justify-content: center;
}

/* Estilos para los enlaces del menú */
nav a {
  margin: 0 0.5rem; /* Reducir el margen entre los enlaces */
  color: #ffd700;
  text-decoration: none;
  font-size: 0.95rem; /* Reducir el tamaño de fuente */
  letter-spacing: 0.5px; /* Reducir el espaciado de letras */
}

/* Estilo de los enlaces al pasar el mouse */
nav a:hover {
  text-decoration: underline;
}

/* Estilos para el icono de menú hamburguesa */
.hamburger {
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 3px; /* Reducir el espacio entre las barras */
  justify-content: space-between;
  width: 22px; /* Reducir el ancho del icono de hamburguesa */
  height: 18px; /* Reducir la altura del icono de hamburguesa */
}

.hamburger .bar {
  background-color: #ffd700;
  height: 3px; /* Reducir el grosor de las barras */
  width: 100%;
  border-radius: 5px;
}

/* Media queries para pantallas pequeñas (menos de 768px) */
@media (max-width: 768px) {
  /* Muestra el icono de menú hamburguesa solo en pantallas pequeñas */
  .hamburger {
    display: flex;
  }

  /* Estilos para los enlaces del menú cuando el menú está oculto */
  nav {
    display: flex;
    flex-direction: column;
    gap: 0.8rem; /* Reducir el espacio entre los enlaces en versión desplegable */
    position: absolute;
    top: 0;
    right: 0;
    background-color: #000;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    transform: translateX(100%); /* Menú oculto inicialmente */
    transition: transform 0.3s ease;
  }

  /* Cuando el menú está visible, se mueve hacia la derecha */
  nav.active {
    transform: translateX(0);
  }

  /* Estilos para los enlaces cuando están en formato desplegable */
  nav a {
    font-size: 1.2rem; /* Tamaño ligeramente más pequeño */
    margin: 0.5rem 0; /* Reducir espacio entre enlaces */
  }

  /* Estilo para el logo en pantallas pequeñas */
  .logo img {
    height: 70px; /* Reducir aún más el tamaño del logo en pantallas pequeñas */
    max-height: 120px;
  }
}
</style>
