import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Planes from "../pages/Planes.vue";
import VetPlus from "../pages/VetPlus.vue";
import Afiliate from "../pages/Afiliate.vue";

const routes = [
  // Example route
  { path: "/", component: Home, name: "Home" },
  /* Ruta planes */
  { path: "/Planes", component: Planes, name: "Planes" },
  /* Ruta Afiliate */
  { path: "/Afiliate", component: Afiliate, name: "Afiliate" },
  /* Ruta Ver mas */
  { path: "/VetPlus", component: VetPlus, name: "VetPlus" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
