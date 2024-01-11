<template>
  <div v-if="law">
    <h1>{{ law.name }}</h1>
    <p>{{ law.keyWord }}</p>
    <p>{{ law.quote }}</p>
  </div>
</template>

<script lang="ts">
//@ts-ignore
import EventService from '@/services/LawService.js'
import type { HabitLaw } from '@/ts/interfaces'

export default {
  name: 'LawDetails',
  props: ['id'],
  data() {
    return {
      law: {} as HabitLaw
    }
  },
  created() {
    EventService.getLaw(this.id)
      .then((response: { data: { id: number; name: string; keyWord: string; quote: string } }) => {
        this.law = response.data
      })
      .catch((error: any) => {
        console.log(error)
      })
  }
}
</script>
