<script setup lang="ts">
import { ArrayParam, NumberParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const numbers = useQueryParam("numbers", ArrayParam(NumberParam));
</script>

<template>
  <Example title="Using an array query parameter">
    The value of <strong>numbers</strong> is
    <pre v-if="numbers !== null">{{ JSON.stringify(numbers) }}</pre>
    <pre v-else>null</pre>

    <Actions>
      <button @click="() => {
      const value = numbers ?? [];
      numbers = [...value, value.length];
    }">
        Add a value to numbers
      </button>
      <button @click="() => (numbers = null)">
        numbers = null
      </button>
    </Actions>
  </Example>
</template>