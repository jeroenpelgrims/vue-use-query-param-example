<script setup lang="ts">
import { StringParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const foo = useQueryParam("foo", StringParam);
</script>

<template>
  <Example title="An input field connected to a query param by using v-model ">
    The value of <strong>foo</strong> is:
    <pre v-if="foo !== null">'{{ foo }}'</pre>
    <pre v-else>null</pre>

    <Actions>
      <input v-model="foo" />
    </Actions>
  </Example>
</template>