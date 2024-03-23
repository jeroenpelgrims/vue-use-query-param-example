<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div>
    The current URL is:
    <pre>{{ route.fullPath }}</pre>
  </div>
</template>

<style scoped lang="scss">
pre {
  background-color: #f4f4f4;
  padding: 0.5em;
  border-radius: 0.25em;
}
</style>