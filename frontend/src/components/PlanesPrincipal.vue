<template>
    <section class="bg-gray-50 py-20">
        <div class="max-w-7xl mx-auto px-4">
            <!-- Titulo de seccion -->
             <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                    Nuestros Planes
                </h2>

                <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Elige el plan que mejor se adapte a tu mascota y disfruta de la tranquilidad de tener su salud protegida
                </p>
             </div>

             <!-- Grid de planes -->
              <div class="grid gap-8 md:grid-cols-3">

                <!-- Plan perros -->
                 <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col">
                    <img src="@/assets/P-Diamante-vetplus.jpg" alt="Plan Diamante" class="w-full h-48 object-cover rounded-lg mb-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">Plan perros</h3>
                    <!-- <ul class="space-y-3 flex-1">
                        <li class="flex items-start gap-2">
                            <span class="text-blue-500">✔</span>Tratamiento de enfermedades
                        </li>
                    </ul> -->
                 </div>
              </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const planes = ref([])
const loading = ref(true)
const API_URL = 'http://localhost:3000';

/* try {
    const res = await fetch(`${API_URL}/dogs`)
    const data = res.json()
    console.log(`${data}`);
} catch (error) {
    
} */

</script>