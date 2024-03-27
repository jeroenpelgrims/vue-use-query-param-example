<script setup lang="ts">
import { arrayParam, numberParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const numbers = useQueryParam("numbers", arrayParam(numberParam()));

function addNumber() {
  const value = numbers.value ?? [];
  numbers.value = [...value, value.length];

}
</script>

<template>
  <Example title="Using an array query parameter">
    The value of <strong>numbers</strong> is
    <pre v-if="numbers !== undefined">{{ JSON.stringify(numbers) }}</pre>
    <pre v-else>undefined</pre>

    <Actions>
      <button @click="addNumber">
        Add a value to numbers
      </button>
      <button @click="() => (numbers = undefined)">
        numbers = undefined
      </button>
    </Actions>
  </Example>
</template>