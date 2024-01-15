<template>
  <router-link :to="{ name: 'LawDetails', params: { id: law.id } }" class="p-1">
    <header class="text-xl font-mono font-bold mb-3">
      {{ `${law.id}.${law.name} (The ${law.keyWord})` }}
    </header>
    <p class="text-4xl font-mono font-bold inline">&#8220;</p>
    <p class="text-base italic font-sans font-medium inline m-1">{{ law.quote }}</p>
  </router-link>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { type HabitLaw } from '@/ts/interfaces'

export default defineComponent({
  props: {
    law: {
      type: Object as PropType<HabitLaw>,
      required: true
    }
  }
})
</script>
<style scoped></style>
