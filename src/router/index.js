// Importamos las funciones necesarias de 'vue-router' para crear el enrutador
import { createRouter, createWebHistory } from 'vue-router';
// Importamos el componente que será utilizado en la ruta principal ('Home.vue')
import Home from '@/views/Home.vue';

// Definimos las rutas de la aplicación
const routes = [
    {
        // Ruta principal, la que se carga cuando se accede a la raíz del sitio
        path: '/',
        // Nombre de la ruta para referenciarla más fácilmente
        name: 'Home',
        // Componente que se renderiza cuando se accede a esta ruta
        component: Home,
    },
];

// Creamos una instancia del enrutador utilizando el historial de navegación en la web
const router = createRouter({
    // Usamos la historia de navegación estándar en aplicaciones SPA (Single Page Application)
    history: createWebHistory(),
    // Definimos las rutas disponibles en la aplicación
    routes,
});

// Exportamos la instancia del enrutador para usarla en la configuración de la aplicación Vue
export default router;
