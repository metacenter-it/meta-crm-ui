<template>
  <div class="quote-container">
    <transition name="fade" mode="out-in">
      <p :key="currentQuote" class="quote-text text-white lead mb-5">
        "{{ quotes[currentQuote] }}"
      </p>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const quotes = ref([
  "Tu voz es el puente hacia la solución.",
  "La empatía convierte una llamada en una conexión.",
  "Hoy es un gran día para resolver problemas.",
  "Calma en la voz, éxito en la gestión.",
  "Cada cliente es una oportunidad de brillar.",
]);

const currentQuote = ref(0);
let interval: number | undefined = undefined;

onMounted(() => {
  // Cambia cada 15 segundos (15000 ms)
  interval = setInterval(() => {
    currentQuote.value = (currentQuote.value + 1) % quotes.value.length;
  }, 15000);
});

onUnmounted(() => {
  // Limpiamos el timer para evitar fugas de memoria
  clearInterval(interval);
});
</script>

<style scoped>
.quote-container {
  padding: 20px;
  text-align: center;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quote-text {
  font-size: 1.2rem;
  font-style: italic;
  color: #2c3e50;
  font-weight: 500;
}

/* Animación de transición suave */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
