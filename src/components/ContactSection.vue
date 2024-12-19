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
  // Nombre del componente para referencia
  name: "ContactSection",

  // Datos reactivos del formulario (nombre, correo, mensaje)
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },

  // Métodos del componente
  methods: {
    // Método que se ejecuta al enviar el formulario
    submitForm() {
      // Verifica si todos los campos están completos
      if (this.name && this.email && this.message) {
        // Muestra un mensaje de agradecimiento si los campos están completos
        alert(`Gracias por contactarnos, ${this.name}!`);
        // Limpia los campos del formulario después de enviarlo
        this.name = "";
        this.email = "";
        this.message = "";
      } else {
        // Muestra una alerta si faltan campos por completar
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
  /* Alineación del texto en el centro */
  text-align: center;
  /* Espaciado dentro de la sección */
  padding: 2rem;
  /* Color de fondo de la sección */
  background-color: $color-white;
  /* Color del texto dentro de la sección */
  color: $color-black;

  /* Estilos para el título de la sección */
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  /* Estilos para el formulario */
  form {
    /* Usamos Flexbox para organizar los campos en columna */
    display: flex;
    flex-direction: column;
    /* Espacio entre los campos del formulario */
    gap: 1rem;
    /* Establece un ancho máximo para el formulario */
    max-width: 400px;
    /* Centra el formulario dentro de la sección */
    margin: auto;
    /* Agrega relleno dentro del formulario */
    padding: 1rem;
    /* Bordes del formulario */
    border: 1px solid $color-gold;
    border-radius: 8px;
    /* Fondo del formulario */
    background-color: $color-black;
    /* Color del texto dentro del formulario */
    color: $color-gold;

    /* Estilos para los campos de entrada (input y textarea) */
    input,
    textarea {
      /* Relleno dentro de los campos */
      padding: 0.5rem;
      /* Bordes de los campos */
      border: 1px solid $color-gold;
      border-radius: 4px;
      /* Fondo de los campos */
      background-color: $color-white;
      /* Color del texto dentro de los campos */
      color: $color-black;
      font-size: 1rem;
    }

    /* Estilos para los placeholders de los campos */
    input::placeholder,
    textarea::placeholder {
      color: #666; /* Gris claro */
    }

    /* Estilos para el botón de envío */
    button {
      /* Fondo dorado del botón */
      background-color: $color-gold;
      /* Color del texto del botón */
      color: $color-black;
      border: none;
      /* Relleno dentro del botón */
      padding: 0.75rem 1.5rem;
      /* Cursor de mano para indicar que es clickeable */
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      /* Efecto de transición para el cambio de color de fondo */
      transition: background-color 0.3s ease;

      /* Estilo del botón al pasar el ratón (hover) */
      &:hover {
        /* Hace que el color del fondo se oscurezca ligeramente */
        background-color: darken($color-gold, 10%);
      }
    }
  }
}
</style>
