<template>
    <header>
        <h2>{{ name }}</h2>
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
<style scoped>
</style>