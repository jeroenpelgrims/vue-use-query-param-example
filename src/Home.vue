<script setup lang="ts">
import CurrentUrl from "./components/CurrentUrl.vue";
import BulkExample from "./examples/BulkExample.vue";
import InputExample from "./examples/InputExample.vue";
import NumberParamExample from "./examples/NumberParamExample.vue";
import StringParamExample from "./examples/StringParamExample.vue";
</script>

<template>
  <CurrentUrl />

  <h1>Examples</h1>
  <div id="examples">
    <StringParamExample />
    <InputExample />
    <NumberParamExample />
    <BulkExample />
  </div>
</template>

<style scoped lang="scss">
#examples {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>