<template>
  <div v-if="law">
    <h1>{{ law.name }}</h1>
    <p>{{ law.keyWord }}</p>
    <p>{{ law.quote }}</p>
    <h2>Steps</h2>
    <div v-for="lawStep in lawSteps" :key="lawStep.id">
      {{ lawStep.instruction }}
    </div>
  </div>
</template>

<script lang="ts">
//@ts-ignore
import LawService from '@/services/LawService.js'
import type { HabitLaw, LawStep } from '@/ts/interfaces'

export default {
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
        LawService.getLawSteps(this.law.id)
          .then((response: { data: [] }) => {
            this.lawSteps = response.data
          })
          .catch((error: any) => {
            console.log(error)
          })
      })
      .catch((error: any) => {
        console.log(error)
      })
  }
}
</script>
