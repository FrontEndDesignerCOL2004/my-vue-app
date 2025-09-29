<template>
  <section class="bg-gray-50 py-20">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Titulo de seccion -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Nuestros Planes
        </h2>

        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a tu mascota y disfruta de la
          tranquilidad de tener su salud protegida
        </p>
      </div>

      <!-- Loader -->
      <div v-if="loading" class="text-center text-gray-600">
        Cargando planes...
      </div>

      <!-- Grid de planes -->
      <div v-else class="grid gap-8 md:grid-cols-3">
        <!-- Plan perros -->
        <div
          v-for="plan in planes"
          :key="plan.id"
          class="bg-white rounded-xl shadow-lg p-6 flex flex-col"
        >
          <!-- imagen -->
          <img
            src="@/assets/P-Diamante-vetplus.jpg"
            alt="Plan Diamante"
            class="w-full h-48 object-cover rounded-lg mb-6"
          />
          <!-- Nombre del plan -->
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Cobertura completa de accidentes y enfermedades
          </h3>
          <hr class="border-t-2 border-gray-300 my-2" />

          <!-- Beneficios -->
          <ul class="space-y-3 flex-1 mt-2">
            <li
              v-for="(beneficio, idx) in plan.benefits"
              :key="idx"
              class="flex items-start gap-2 text-gray-700"
            >
              <span class="text-blue-500">✔</span>{{beneficio}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Estado
const planes = ref([]);
const loading = ref(true);

// URL de la api en render
const API_URL = "https://api-vetplus.onrender.com/api/planes";

// Llamado a la api
onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/tipo/dog`);
    planes.value = await res.json();
  } catch (error) {
    console.error("Error al cargar los planes", error);
  } finally {
    loading.value = false;
  }
});
</script>
