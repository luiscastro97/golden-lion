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
          name: 'Reloj Dorado',
          description: 'Reloj dorado ideal para complementar tu look.',
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

/* Estilos para la lista de productos utilizando grid */
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas en pantallas grandes */
  gap: 1.5rem;
  margin-top: 2rem;
}

/* Estilos para cada tarjeta de producto */
.product {
  background-color: #ffd700;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Estilos para la imagen del producto */
.product-image {
  width: 80%; /* Ajustamos el tamaño de la imagen */
  max-width: 200px; /* Máximo tamaño de la imagen */
  height: auto;
  border-radius: 5px;
  margin-bottom: 1rem;
}

/* Estilo para el nombre del producto */
h3 {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}

/* Estilo para la descripción del producto */
p {
  font-size: 0.9rem;
  margin: 0.5rem 0;
  color: #333;
}

/* Estilos para el precio */
.price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  margin-top: 0.5rem;
}

/* Media Queries para pantallas pequeñas */
@media (max-width: 768px) {
  /* En pantallas pequeñas (móviles), cambiamos a una sola columna */
  .product-list {
    grid-template-columns: 1fr; /* Una columna por producto */
  }

  /* Ajustamos el tamaño de las imágenes */
  .product-image {
    width: 90%; /* Imagen más grande en dispositivos móviles */
  }

  /* Reducir el padding y margenes en móviles */
  .products {
    padding: 1rem;
  }
}
</style>
