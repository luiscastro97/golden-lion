<template>
  <!-- Sección de productos (Listado de productos) -->
  <section id="products" class="products">
    <!-- Título que describe la sección -->
    <h2>Nuestros Productos</h2>
    <div class="product-list">
      <!-- Itera sobre el array 'products' para mostrar cada producto -->
      <div class="product" v-for="(product, index) in products" :key="index">
        <!-- Muestra la imagen del producto -->
        <img :src="product.image" :alt="product.name" class="product-image"/>
        <!-- Nombre del producto -->
        <h3>{{ product.name }}</h3>
        <!-- Descripción del producto -->
        <p>{{ product.description }}</p>
        <!-- Precio del producto -->
        <span class="price">{{ product.price }}</span>
      </div>
    </div>
  </section>
</template>

<script>
// Definición del componente 'ProductsSection'
export default {
  // Definición de los datos del componente, incluyendo los productos
  data() {
    return {
      // Lista de productos
      products: [
        {
          name: 'Anillo de Diamantes',
          description: 'Un anillo elegante con diamantes brillantes, ideal para ocasiones especiales.',
          // Ruta de la imagen del producto
          image: require('@/assets/images/anillo.jpg'),
          price: '$70,000'
        },
        {
          name: 'Cadena de Oro',
          description: 'Cadena de oro de 18 kilates perfecta para una ocasión especial.',
          // Ruta de la imagen del producto
          image: require('@/assets/images/cadena.jpg'),
          price: '$390,000'
        },
        {
          name: 'aretes de oro',
          description: 'aretes de oro perfecta para toda ocacion.',
          // Ruta de la imagen del producto
          image: require('@/assets/images/arestes.jpg'),
          price: '$390,000'
        },
        {
          name: 'pulsera de oro',
          description: 'pulsera de oro perfecta para resaltar tu elegancia.',
          // Ruta de la imagen del producto
          image: require('@/assets/images/pulsera.jpg'),
          price: '$390,000'
        },
        {
          name: 'pulsera de oro',
          description: 'pulsera de oro perfecta para resaltar tu elegancia.',
          // Ruta de la imagen del producto
          image: require('@/assets/images/RELOJ_ONOLA-DORADO.jpg'),
          price: '$390,000'
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Estilos generales para la sección de productos */
.products {
  /* Espaciado interno */
  padding: 2rem;
  /* Fondo negro para resaltar los productos dorados */
  background-color: #000;
  /* Texto blanco */
  color: #fff;
  /* Centra el texto */
  text-align: center;
}

/* Estilos para la lista de productos */
.product-list {
  /* Usamos una cuadrícula para mostrar los productos en varias columnas */
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas de igual tamaño */
  gap: 1.5rem; /* Espaciado entre los productos */
}

/* Estilos para cada producto */
.product {
  /* Fondo dorado para resaltar los productos */
  background-color: #ffd700;
  /* Espaciado interno */
  padding: 1rem;
  /* Bordes redondeados */
  border-radius: 8px;
  width: auto;
  height: auto;
  
}

/* Estilos para la imagen del producto */
.product-image {
  /* La imagen ocupa todo el ancho del contenedor */
  width: 50%;
  /* Mantiene la proporción de la imagen */
  height: auto;
  /* Bordes redondeados */
  border-radius: 5px;
}

/* Estilos para el precio del producto */
.price {
  /* Tamaño de la fuente */
  font-size: 1.2rem;
  /* Hacemos que el precio sea más destacado */
  font-weight: bold;
  /* Color del precio (negro) */
  color: #000;
  /* Espaciado superior para separar el precio de la descripción */
  margin-top: 0.5rem;
}
</style>
