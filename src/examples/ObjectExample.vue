<script setup lang="ts">
import { ObjectParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

type MyObject = {
  foo: string;
  bar: number;
};
const obj = useQueryParam("obj", ObjectParam<MyObject>());
</script>

<template>
  <Example title="Serializing objects in query parameters">
    The value of <strong>obj</strong> is
    <pre v-if="obj !== null">{{ JSON.stringify(obj) }}</pre>
    <pre v-else>null</pre>

    <Actions>
      <button @click="() => (obj = { foo: 'pi', bar: 3.1415 })">
        Set obj to a value
      </button>
      <button @click="() => (obj = null)">
        obj = null
      </button>
    </Actions>
  </Example>
</template>