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
// @ts-ignore
import LawService from '@/services/LawService.js'

export default defineComponent({
  components: {
    LawElement
  },
  data() {
    return {
      laws: [] as Array<HabitLaw>
    }
  },
  created() {
    LawService.getLaws()
      .then(
        (response: { data: { id: number; name: string; keyWord: string; quote: string }[] }) => {
          this.laws = response.data
        }
      )
      .catch((error: any) => {
        console.log(error)
      })
  }
})
</script>
<style scoped></style>
