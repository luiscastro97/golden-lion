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
  name: "AppFooter",
};
</script>

<style scoped>
/* Estilos específicos para el componente footer */
.footer {
  text-align: center; /* Alinea el texto al centro */
  padding: 1rem; /* Agrega un relleno alrededor del contenido */
  background-color: #000; /* Establece un fondo de color negro para el pie de página */
  color: #fff; /* Establece el color del texto como blanco */
  position: relative;
  bottom: 0;
  width: 100%;
}

/* Media query para pantallas pequeñas */
@media (max-width: 768px) {
  .footer {
    font-size: 0.9rem; /* Ajusta el tamaño del texto en pantallas pequeñas */
    padding: 1rem 0.5rem; /* Reduce el relleno en pantallas pequeñas */
  }
}

/* Media query para pantallas más grandes */
@media (min-width: 1024px) {
  .footer {
    font-size: 1.2rem; /* Aumenta el tamaño del texto en pantallas grandes */
    padding: 2rem 4rem; /* Aumenta el relleno en pantallas grandes */
  }
}
</style>
