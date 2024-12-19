<template> 
  <!-- Componente de cabecera del sitio -->
  <header class="header">
    <!-- Logo del sitio, en este caso el texto 'Golden Lion' -->
    <div class="logo">
      <img src="@/assets/images/logo.jpg" alt="Logo de Golden Lion">
    </div>

    <!-- Barra de navegación con enlaces a las secciones de la página -->
    <nav>
      <!-- Enlaces a las diferentes secciones de la landing page -->
      <a href="#hero">Inicio</a>
      <a href="#products">Productos</a>
      <a href="#contact">Contacto</a>
    </nav>
  </header>
</template>

<script>
// Definición del componente de Vue.js
export default {
  name: "AppHeader",
};
</script>

<style scoped lang="scss">
/* Importa las variables SCSS definidas en un archivo externo */
@import '@/assets/styles/variables.scss';

/* Estilos para el componente de cabecera */
.header {
  /* Usamos Flexbox para organizar el contenido de la cabecera */
  display: flex;
  /* Distribuye el contenido con espacio entre los elementos */
  justify-content: space-between;
  /* Alinea los elementos verticalmente al centro */
  align-items: center;
  /* Agrega un relleno de 1rem arriba y abajo, y 2rem a los lados */
  padding: 1rem 2rem;
  /* Color de fondo de la cabecera */
  background-color: $color-black;
  /* Color del texto de la cabecera */
  color: $color-gold;
}

/* Estilos para el logo */
.logo img {
  width: auto;         /* Mantén la proporción original de la imagen */
  height: 100px;        /* Ajusta la altura del logo según lo necesites */
  max-height: 200px;    /* Puedes ajustar la altura máxima si es necesario */
}

/* Estilos para los enlaces de navegación */
nav a {
  /* Espacio entre los enlaces */
  margin: 0 1rem;
  /* Color dorado para los enlaces */
  color: $color-gold;
  /* Elimina el subrayado de los enlaces por defecto */
  text-decoration: none;

  /* Estilo para el hover (cuando el usuario pasa el ratón sobre el enlace) */
  &:hover {
    /* Subraya el enlace cuando el ratón está sobre él */
    text-decoration: underline;
  }
}
</style>
