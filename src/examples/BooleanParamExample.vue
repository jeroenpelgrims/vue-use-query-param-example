<script setup lang="ts">
import { BooleanParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const boolvar = useQueryParam("boolvar", BooleanParam);
</script>

<template>
  <Example title="Using boolean query parameters">
    The value of <strong>boolvar</strong> is
    <pre v-if="boolvar !== null">{{ boolvar ? 'true' : 'false' }}</pre>
    <pre v-else>null</pre>

    <Actions>
      <button @click="boolvar = true">
        boolvar = true
      </button>
      <button @click="boolvar = false">
        boolvar = false
      </button>
      <button @click="boolvar = null">
        boolvar = null
      </button>
    </Actions>
  </Example>
</template>