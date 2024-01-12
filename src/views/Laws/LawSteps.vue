<template>
  <div>
    <div>LAW STEPS</div>
    <div v-for="step in lawSteps" :key="step.id">
      {{ step.instruction }}
    </div>
    <router-link
      :to="{ name: 'LawSteps', query: { lawId: lawId, page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
    >
      &#60; Prev Page</router-link
    >

    <router-link
      v-if="hasNextPage"
      :to="{ name: 'LawSteps', query: { lawId: lawId, page: page + 1 } }"
      rel="next"
      >Next Page &#62;</router-link
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import type { LawStep } from '@/ts/interfaces'
//@ts-ignore
import LawService from '@/services/LawService.js'

export default defineComponent({
  name: 'LawSteps',
  props: ['page', 'lawId'],
  data() {
    return {
      lawSteps: [] as Array<LawStep>,
      totalSteps: 0
    }
  },
  created() {
    watchEffect(() => {
      this.lawSteps = []

      LawService.getLawSteps(this.lawId, 3, this.page)
        .then((response: { data: []; headers: any }) => {
          console.log(response.data)
          this.lawSteps = response.data
          this.totalSteps = response.headers['x-total-count']
        })
        .catch((error: any) => {
          console.log(error)
        })
    })
  },
  computed: {
    hasNextPage() {
      let totalPages = Math.ceil(this.totalSteps / 3)
      return this.page < totalPages
    }
  }
})
</script>
<style></style>
