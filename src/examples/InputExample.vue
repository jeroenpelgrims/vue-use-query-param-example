<script setup lang="ts">
import { StringParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const foo = useQueryParam("foo", StringParam);
</script>

<template>
  <Example title="<input v-model> ">
    The value of <strong>foo</strong> is:
    <pre v-if="foo !== null">'{{ foo }}'</pre>
    <pre v-else>null</pre>

    <Actions>
      <input v-model="foo" />
    </Actions>
  </Example>
</template>