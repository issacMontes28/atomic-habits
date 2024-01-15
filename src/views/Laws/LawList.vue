<template>
  <header class="flex w-full justify-center mb-5">
    <h1 class="text-3xl font-mono font-bold">The Laws for Atomic Habits</h1>
  </header>
  <section
    name="lawList"
    class="grid grid-flow-row auto-rows-max grid-cols-2 gap-2 place-content-stretch h-48"
  >
    <article
      v-for="aux in laws"
      :key="aux.id"
      class="p-6 mx-3.5 bg-white rounded-xl shadow-lg hover:bg-periwinkle-gray-50"
    >
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
