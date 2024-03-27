<script setup lang="ts">
import { stringParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const foo = useQueryParam("foo", stringParam());
</script>

<template>
  <Example title="A query param of type string">
    The value of <strong>foo</strong> is:
    <pre v-if="foo !== undefined">'{{ foo }}'</pre>
    <pre v-else>undefined</pre>

    <Actions>
      <button @click="foo = 'Example text'">
        foo.value = 'Example text'
      </button>
      <button @click="foo = ''">
        foo.value = ''
      </button>
      <button @click="foo = undefined">
        foo.value = undefined
      </button>
    </Actions>
  </Example>
</template>