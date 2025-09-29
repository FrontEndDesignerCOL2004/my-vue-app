<template>
  <section class="relative bg-sky-200 pt-24 pb-20 overflow-hidden" ref="heroSection">
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 relative z-10 transition-all duration-500 ease-out">
      
      <!-- Columna texto -->
      <div class="flex-[0.9] max-w-xl relative z-20 transition-all duration-500 delay-100">
        <div class="backdrop-blur-md bg-white/50 rounded-xl p-6 shadow-xl ">
          <h1 ref="title" class="text-4xl md:text-5xl font-extrabold tracking-tighter-[1em] mb-10 text-gray-900">
            ¡Cada mascota es única y tiene su propia personalidad!
          </h1>
          <p ref="paragraph" class="mt-4 text-lg text-gray-600 leading-relaxed text-balance mb-10">
            Entendemos que tienen necesidades particulares, por eso con Medicina Prepagada Veterinaria, queremos brindarle a tu peludito la atención oportuna y de calidad que él necesita.
          </p>
          <div ref="buttons" class="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/Planes"
            class="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg shadow-md hover:shadow-lg transition">
            Ver Planes
          </a>
          <a href="/Afiliate"
          class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-sky-300/40 transition">
          Contáctanos 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#31B8FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block">
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>

      <!-- Columna imagen sin degradado -->
      <div ref="imageWrapper" class="flex-[1.1] relative flex justify-center transition-all duration-500 delay-200">
        <img 
          src="@/assets/thumbnail_perro_1.webp" 
          alt="Mascota feliz"
          class="w-full h-auto max-h-[500px] object-contain border-none bg-transparent hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const heroSection = ref(null)
const title = ref(null)
const paragraph = ref(null)
const buttons = ref(null) // contenedor de botones
const imageWrapper = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animateHero()
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  if (heroSection.value) observer.observe(heroSection.value)
})

function animateHero() {
  const tl = gsap.timeline({ defaults: { duration: 0.8, ease: 'power4.out' } })

  // 1. Título con fade-in
  tl.from(title.value, { opacity: 0, y: 40 })

  // 2. Párrafo con fade-in
  tl.from(paragraph.value, { opacity: 0, y: 30 }, '-=0.4')

  // 3. Botones con animación suave y escalonada
  const btns = buttons.value.querySelectorAll('a')
  tl.fromTo(btns, 
    { y: 30, opacity: 0, scale: 0.95 }, 
    { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      stagger: 0.2,
      duration: 1,
      ease: 'elastic.out(0.7, 0.7)'
    }, 
    '-=0.3'
  )

  // 4. Imagen con animación suave y fluida
  tl.fromTo(imageWrapper.value, 
    { 
      scale: 0.88,
      duration: 0.6,
      ease:'power1.in'
    }, 
    { 
      scale:1,
      duration: 0.8,
      ease: 'power1.out'
    }, 
    '-=0.3'
  )
}
</script>
