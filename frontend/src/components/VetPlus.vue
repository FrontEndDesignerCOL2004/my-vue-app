<template>
  <section class="bg-white py-40">
    <div
      class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12"
    >
      <!-- Imagen/ Ilustracion -->
      <div class="flex-1">
        <img
          src="@/assets/veterinario_cuidando_mascota.jpg"
          alt="veterinario_cuidando_mascota"
          class="w-full h-auto rounded-xl shadow-lg object-cover"
        />
      </div>

      <!-- Texto -->
      <div class="flex-1">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Que es vetplus?
        </h2>

        <p class="text-lg text-gray-600 leading-relaxed mb-6">
          Es la única Medicina Prepagada veterinaria con el cual su mascota
          podrá contar con todos los servicios médicos de la más alta calidad.
          Con VetPlus® usted tendrá cobertura total en medicina preventiva,
          atención y tratamiento de urgencias, enfermedades y accidentes.
        </p>

        <ul class="space-y-6 mb-8">
          <li class="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Cobertura nacional con veterinarios certificados
          </li>
          <li class="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Atención 24/7 para emergencias
          </li>
          <li class="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Planes flexibles y adaptados a tu mascota
          </li>
        </ul>

        <a
          href="/VetPlus"
          class="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg shadow-md hover:shadow-lg trnasition"
          >Ver mas</a
        >
      </div>
    </div>
  </section>
</template>

<script setup></script>
