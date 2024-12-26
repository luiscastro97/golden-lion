<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/images/logo.jpg" alt="Logo de Golden Lion">
    </div>

    <nav class="nav-right">
      <a href="#hero">Inicio</a>
      <a href="#products">Productos</a>
      <a href="#contact">Contacto</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style scoped lang="scss">
/* Estilos generales para la cabecera */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;
  color: #ffd700;
}

/* Estilos para el logo */
.logo img {
  height: 60px;
}

/* Estilos para la navegación a la derecha */
.nav-right {
  display: flex;
  gap: 2rem;
  align-items: center;
}

/* Estilos adicionales (opcional) */
.nav-right a {
  color: #ffd700;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.nav-right a:hover {
  text-decoration: underline;
}
</style>