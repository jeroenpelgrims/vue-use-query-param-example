<script setup lang="ts">
import { ObjectParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const matrix = useQueryParam("matrix", ObjectParam<number[][]>());

function setMatrix() {
  matrix.value = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
}
</script>

<template>
  <Example title="Nested arrays">
    <div><strong>NOTE: Nested arrays are currently only possible using an ObjectParam</strong></div>

    The value of <strong>matrix</strong> is
    <pre v-if="matrix !== null">{{ JSON.stringify(matrix) }}</pre>
    <pre v-else>null</pre>

    <Actions>
      <button @click="setMatrix">
        Set the matrix to a value
      </button>
      <button @click="() => (matrix = null)">
        matrix = null
      </button>
    </Actions>
  </Example>
</template>