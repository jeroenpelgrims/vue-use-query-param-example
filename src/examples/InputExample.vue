<script setup lang="ts">
import { stringParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const foo = useQueryParam("foo", stringParam());
</script>

<template>
  <Example title="An input field connected to a query param by using v-model ">
    The value of <strong>foo</strong> is:
    <pre v-if="foo !== undefined">'{{ foo }}'</pre>
    <pre v-else>undefined</pre>

    <Actions>
      <input v-model="foo" />
    </Actions>
  </Example>
</template>