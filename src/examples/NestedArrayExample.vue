<script setup lang="ts">
import { objectParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const matrix = useQueryParam("matrix", objectParam<number[][]>());

function setMatrix() {
  matrix.value = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
}
</script>

<template>
  <Example title="Nested arrays">
    <div><strong>NOTE: Nested arrays are currently only possible using an ObjectParam</strong></div>

    The value of <strong>matrix</strong> is
    <pre v-if="matrix !== undefined">{{ JSON.stringify(matrix) }}</pre>
    <pre v-else>undefined</pre>

    <Actions>
      <button @click="setMatrix">
        Set the matrix to a value
      </button>
      <button @click="() => (matrix = undefined)">
        matrix = undefined
      </button>
    </Actions>
  </Example>
</template>