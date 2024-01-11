<template>
  <router-link :to="{ name: 'LawDetails', params: { id: law.id } }" class="p-0">
    <div class="h-5/6 p-6 mx-3.5 bg-white rounded-xl shadow-lg hover:bg-periwinkle-gray-50">
      <header class="text-xl font-mono font-bold">
        {{ `${law.id}.${law.name} (The ${law.keyWord})` }}
      </header>
      <div class="flex flex-col">
        <p class="text-xl font-mono font-bold">&#8220;</p>
        <p class="text-l font-sans font-semibold">{{ law.quote }}</p>
      </div>
    </div>
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
