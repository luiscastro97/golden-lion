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
  data() {
    return {
      // Lista de productos
      products: [
        {
          name: 'Anillo de Diamantes',
          description: 'Un anillo elegante con diamantes brillantes, ideal para ocasiones especiales.',
          image: require('@/assets/images/anillo.jpg'),
          price: '$70,000'
        },
        {
          name: 'Cadena de Oro',
          description: 'Cadena de oro de 18 kilates perfecta para una ocasión especial.',
          image: require('@/assets/images/cadena.jpg'),
          price: '$390,000'
        },
        {
          name: 'Aretes de Oro',
          description: 'Aretes de oro perfectos para toda ocasión.',
          image: require('@/assets/images/arestes.jpg'),
          price: '$390,000'
        },
        {
          name: 'Pulsera de Oro',
          description: 'Pulsera de oro perfecta para resaltar tu elegancia.',
          image: require('@/assets/images/pulsera.jpg'),
          price: '$390,000'
        },
        {
          name: 'Reloj Onola Dorado',
          description: 'Reloj Onola de oro para complementar tu look.',
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
  padding: 2rem;
  background-color: #000;
  color: #fff;
  text-align: center;
}

/* Estilos para la lista de productos */
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas de igual tamaño */
  gap: 1.5rem;
}

/* Estilos para cada producto */
.product {
  background-color: #ffd700;
  padding: 1rem;
  border-radius: 8px;
  width: auto;
  height: auto;
  text-align: center;
}

/* Estilos para la imagen del producto */
.product-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

/* Estilos para el precio del producto */
.price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  margin-top: 0.5rem;
}

/* Media query para pantallas pequeñas (max-width: 768px) */
@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr); /* Dos columnas en pantallas más pequeñas */
  }
}

/* Media query para pantallas muy pequeñas (max-width: 480px) */
@media (max-width: 480px) {
  .product-list {
    grid-template-columns: 1fr; /* Una columna en pantallas muy pequeñas */
  }

  .product {
    padding: 0.5rem; /* Reducir el padding de los productos */
  }

  .price {
    font-size: 1rem; /* Reducir el tamaño de la fuente del precio */
  }
}
</style>
