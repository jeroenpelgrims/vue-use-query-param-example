<script setup lang="ts">
import { DateParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const selectedDate = useQueryParam("selectedDate", DateParam);
</script>

<template>
  <Example title="Using boolean query parameters">
    The value of <strong>selectedDate</strong> is
    <pre>{{ selectedDate ?? 'null' }}</pre>

    <Actions>
      <input type="date" v-bind="selectedDate" @change="e => {
      const target = e.target as HTMLInputElement;
      const value = target.valueAsDate;
      selectedDate = value;
    }" />
      <button @click="selectedDate = null">Clear</button>
    </Actions>
  </Example>
</template>