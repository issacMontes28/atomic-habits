<template>
  <div v-if="law">
    <h1>{{ law.name }}</h1>
    <p>{{ law.keyWord }}</p>
    <p>{{ law.quote }}</p>
    <h2>Steps</h2>
    <router-link :to="{ name: 'LawSteps', query: { lawId: law.id, page: 1 } }">
      Go to steps for this law
    </router-link>
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//@ts-ignore
import LawService from '@/services/LawService.js'
import type { HabitLaw, LawStep } from '@/ts/interfaces'

export default defineComponent({
  name: 'LawDetails',
  props: ['id'],
  data() {
    return {
      law: {} as HabitLaw,
      lawSteps: [] as Array<LawStep>
    }
  },
  created() {
    LawService.getLaw(this.id)
      .then((response: { data: { id: number; name: string; keyWord: string; quote: string } }) => {
        this.law = response.data
      })
      .catch((error: any) => {
        console.log(error)
      })
  }
})
</script>
