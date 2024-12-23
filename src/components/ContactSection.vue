<template>
  <!-- Sección de contacto con un formulario para que los usuarios puedan enviar un mensaje -->
  <section id="contact" class="contact">
    <!-- Título de la sección -->
    <h2>Contacto</h2>

    <!-- Formulario para enviar el mensaje -->
    <form @submit.prevent="submitForm">
      <!-- Campo de texto para el nombre del usuario -->
      <input type="text" placeholder="Nombre" v-model="name" />

      <!-- Campo de texto para el correo electrónico -->
      <input type="email" placeholder="Correo Electrónico" v-model="email" />

      <!-- Campo de texto para el mensaje del usuario -->
      <textarea placeholder="Mensaje" v-model="message"></textarea>

      <!-- Botón para enviar el formulario -->
      <button type="submit">Enviar</button>
    </form>
  </section>
</template>

<script>
// Definición del componente 'ContactSection'
export default {
  name: "ContactSection",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      if (this.name && this.email && this.message) {
        alert(`Gracias por contactarnos, ${this.name}!`);
        this.name = "";
        this.email = "";
        this.message = "";
      } else {
        alert("Por favor, completa todos los campos.");
      }
    },
  },
};
</script>

<style scoped lang="scss">
/* Importa las variables SCSS definidas en un archivo externo */
@import '@/assets/styles/variables.scss';

/* Estilos para la sección de contacto */
.contact {
  text-align: center;
  padding: 2rem;
  background-color: $color-white;
  color: $color-black;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: auto;
    padding: 1rem;
    border: 1px solid $color-gold;
    border-radius: 8px;
    background-color: $color-black;
    color: $color-gold;

    input,
    textarea {
      padding: 0.5rem;
      border: 1px solid $color-gold;
      border-radius: 4px;
      background-color: $color-white;
      color: $color-black;
      font-size: 1rem;
    }

    input::placeholder,
    textarea::placeholder {
      color: #666;
    }

    button {
      background-color: $color-gold;
      color: $color-black;
      border: none;
      padding: 0.75rem 1.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: darken($color-gold, 10%);
      }
    }
  }
}

/* Media query para pantallas pequeñas */
@media (max-width: 768px) {
  .contact {
    padding: 1.5rem;
  }

  .contact h2 {
    font-size: 1.5rem;
  }

  form {
    width: 90%; /* Ajusta el ancho del formulario */
    padding: 1rem;
  }

  input,
  textarea {
    font-size: 0.9rem;
  }

  button {
    padding: 0.6rem 1.2rem;
  }
}

/* Media query para pantallas muy pequeñas (por ejemplo, móviles en modo vertical) */
@media (max-width: 480px) {
  .contact {
    padding: 1rem;
  }

  form {
    width: 100%; /* El formulario ocupará todo el ancho disponible */
  }

  input,
  textarea {
    font-size: 0.8rem; /* Ajusta el tamaño de la fuente para pantallas muy pequeñas */
  }

  button {
    padding: 0.5rem 1rem; /* Reduce el tamaño del botón */
  }
}
</style>
