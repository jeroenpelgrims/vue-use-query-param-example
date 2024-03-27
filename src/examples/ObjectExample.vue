<script setup lang="ts">
import { objectParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

type MyObject = {
  foo: string;
  bar: number;
};
const obj = useQueryParam("obj", objectParam<MyObject>());
</script>

<template>
  <Example title="Serializing objects in query parameters">
    The value of <strong>obj</strong> is
    <pre v-if="obj !== undefined">{{ JSON.stringify(obj) }}</pre>
    <pre v-else>undefined</pre>

    <Actions>
      <button @click="obj = { foo: 'pi', bar: 3.1415 }">
        Set obj to a value
      </button>
      <button @click="obj = undefined">
        obj = undefined
      </button>
    </Actions>
  </Example>
</template>