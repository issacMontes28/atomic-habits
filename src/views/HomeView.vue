<script setup lang="ts">
import LawList from './Laws/LawList.vue';
const laws: string[] = ["Make It Obvious","Make It Attractive", "Make It Easy", "Make It Satisfying"]

</script>

<template>
  <main>
    <LawList :laws='laws'></LawList>
  </main>
</template>
