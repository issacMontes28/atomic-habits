<template>
  <header>
    <p class="mt-2 text-gray-500">{{ name }}</p>
  </header>
  <p>The info for a law</p>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: String
  }
})
</script>
<style scoped></style>
