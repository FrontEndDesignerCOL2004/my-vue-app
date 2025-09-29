# VetPlus - Aplicación de Medicina Prepagada Veterinaria

## 📋 Descripción del Proyecto

VetPlus es una aplicación web moderna desarrollada con Vue.js y TypeScript que ofrece servicios de medicina prepagada para mascotas. El proyecto utiliza una arquitectura frontend/backend separada para mejor mantenimiento y escalabilidad.

## 🛠️ Tecnologías Utilizadas

### Frontend

- Vue.js 3 (Composition API)
- TypeScript
- Tailwind CSS
- GSAP (Animaciones)
- Vite (Build tool)

### Backend

- Node.js
- TypeScript
- Express.js
- Base de datos (MongoDB/PostgreSQL)

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn
- Git

### Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/your-username/my-vue-app.git
cd my-vue-app
```

2. Instalar dependencias del frontend:

```bash
cd frontend
npm install
```

3. Instalar dependencias del backend:

```bash
cd backend
npm install
```

4. Iniciar el servidor de desarrollo:

Frontend:

```bash
npm run dev
```

Backend:

```bash
npm run dev
```

## 📁 Estructura del Proyecto

```
my-vue-app/
├── frontend/
│   ├── src/
│   │   ├── assets/         # Imágenes y recursos estáticos
│   │   ├── components/     # Componentes Vue reutilizables
│   │   ├── pages/         # Páginas/Vistas de la aplicación
│   │   ├── router/        # Configuración de rutas
│   │   └── App.vue        # Componente raíz
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/   # Controladores de la API
│   │   ├── models/        # Modelos de datos
│   │   ├── routes/        # Rutas de la API
│   │   └── server.ts      # Archivo principal del servidor
│   └── package.json
└── README.md
```

## 🎨 Características Principales

### Frontend

- Diseño responsive con Tailwind CSS
- Animaciones fluidas con GSAP
- Navegación SPA con Vue Router
- Gestión de estado con Vue 3 Composition API

### Backend

- API RESTful
- Validación de datos
- Manejo de errores centralizado
- Autenticación y autorización

## 📚 Recursos de Aprendizaje

### Vue.js y Composition API

- [Documentación Oficial de Vue.js](https://vuejs.org/)
- [Vue 3 Composition API Guide](https://vuejs.org/guide/introduction.html)
- [Vue Mastery](https://www.vuemastery.com/) - Cursos excelentes
- [Vue School](https://vueschool.io/) - Tutoriales interactivos

### Tailwind CSS

- [Documentación Oficial de Tailwind](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com/) - Componentes de ejemplo
- [Tailwind Tips](https://twitter.com/tailwindcss) - Tips diarios

### GSAP (Animaciones)

- [GSAP Documentation](https://greensock.com/docs/)
- [GSAP Learning Center](https://greensock.com/learning/)
- [GSAP Cheat Sheet](https://greensock.com/cheatsheet/)

### TypeScript

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript Exercises](https://typescript-exercises.github.io/)

### Node.js y Express

- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

## 💡 Tips para Principiantes

1. **Entendiendo Vue.js**

   - Comienza con los conceptos básicos de Vue (templates, componentes, props)
   - Practica con pequeños componentes antes de crear páginas completas
   - Usa la Vue DevTools para depuración

2. **Trabajando con TypeScript**

   - Aprende los tipos básicos primero
   - Usa interfaces para definir la forma de los objetos
   - Aprovecha el autocompletado del IDE

3. **Tailwind CSS**

   - Revisa la documentación para clases comunes
   - Usa el inspector del navegador para ver qué clases se aplican
   - Practica con el playground de Tailwind

4. **GSAP Animations**

   - Comienza con animaciones simples
   - Usa la línea de tiempo (timeline) para secuencias
   - Prueba diferentes tipos de ease

5. **Mejores Prácticas**
   - Mantén los componentes pequeños y reutilizables
   - Comenta tu código cuando sea necesario
   - Usa nombres descriptivos para variables y funciones
   - Haz commits frecuentes con mensajes claros

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 🐛 Reporte de Bugs

Si encuentras un bug, por favor crea un issue con:

- Descripción detallada del problema
- Pasos para reproducirlo
- Comportamiento esperado vs actual
- Screenshots si es posible

## 📧 Contacto

Para preguntas y soporte, contacta a:
[Tu correo o información de contacto]

## 📜 Licencia

Este proyecto está bajo la Licencia MIT.
