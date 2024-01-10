<template>
  <section name="lawList" class="law-list">
    <h1>The laws for atomic habits</h1>
    <article v-for="law in laws" :key="law" class="law-article">
      <LawElement :name="law"></LawElement>
    </article>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LawElement from '../../components/Law/LawElement.vue'

export default defineComponent({
  props: {
    msg: String,
    laws: Array<string>
  },
  components: {
    LawElement
  }
})
</script>
<style scoped>
.law-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aqua;
}

.law-article {
  margin-bottom: 10px;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
