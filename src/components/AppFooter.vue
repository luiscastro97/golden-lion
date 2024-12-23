<template>
  <!-- Componente de pie de página -->
  <footer class="footer">
    <!-- Contenido del pie de página, en este caso el texto con el copyright -->
    <p>© 2024 Golden Lion</p>
  </footer>
</template>

<script>
// Definición del componente de Vue.js
export default {
  // Nombre del componente, utilizado para referirse a él en otros archivos
  name: "AppFooter",
};
</script>

<style scoped>
/* Estilos específicos para el componente footer */
.footer {
  /* Alinea el texto al centro */
  text-align: center;
  
  /* Agrega un relleno alrededor del contenido */
  padding: 1rem;
  
  /* Establece un fondo de color negro para el pie de página */
  background-color: #000;
  
  /* Establece el color del texto como blanco */
  color: #fff;
}
</style>
