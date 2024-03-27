<script setup lang="ts">
import { booleanParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const boolvar = useQueryParam("boolvar", booleanParam());
</script>

<template>
  <Example title="Using boolean query parameters">
    The value of <strong>boolvar</strong> is
    <pre v-if="boolvar !== undefined">{{ boolvar ? 'true' : 'false' }}</pre>
    <pre v-else>undefined</pre>

    <Actions>
      <button @click="boolvar = true">
        boolvar = true
      </button>
      <button @click="boolvar = false">
        boolvar = false
      </button>
      <button @click="boolvar = undefined">
        boolvar = undefined
      </button>
    </Actions>
  </Example>
</template>