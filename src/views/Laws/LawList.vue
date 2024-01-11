<template>
  <section name="lawList" class="flex flex-row flex-wrap justify-center h-2/3">
    <header class="flex w-full justify-center mb-5">
      <h1 class="text-3xl font-mono font-bold">The Laws for Atomic Habits</h1>
    </header>
    <article v-for="aux in laws" :key="aux.id" class="w-1/2 mb-3 h-full">
      <LawElement :law="aux"></LawElement>
    </article>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LawElement from '../../components/Law/LawElement.vue'
import type { HabitLaw } from '@/ts/interfaces'

const laws: Array<HabitLaw> = [
  {
    id: 1,
    name: 'Make It Obvious',
    keyWord: 'Cue',
    quote: 'Motivation is overrated, environment matters more'
  },
  {
    id: 2,
    name: 'Make It Attractive',
    keyWord: 'Craving',
    quote: 'Lorem ipsum dolo'
  },
  {
    id: 3,
    name: 'Make It Easy',
    keyWord: 'Response',
    quote: 'Lorem ipsum dolo'
  },
  {
    id: 4,
    name: 'Make It Satisfying',
    keyWord: 'Reward',
    quote: 'Lorem ipsum dolo'
  }
]

export default defineComponent({
  components: {
    LawElement
  },
  data() {
    return {
      laws: laws
    }
  }
})
</script>
<style scoped></style>
