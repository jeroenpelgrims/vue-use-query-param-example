<script setup lang="ts">
import { DateParamType, dateParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const selectedDate = useQueryParam("selectedDate", dateParam({ dateType: DateParamType.Date }));

function setDate(e: Event) {
  const target = e.target as HTMLInputElement;
  const value = target.valueAsDate ?? undefined;
  selectedDate.value = value;
}
</script>

<template>
  <Example title="Using boolean query parameters">
    The value of <strong>selectedDate</strong> is
    <pre>{{ selectedDate ?? 'undefined' }}</pre>

    <Actions>
      <input type="date" v-bind="selectedDate" @change="setDate" />
      <button @click="selectedDate = undefined">Clear</button>
    </Actions>
  </Example>
</template>