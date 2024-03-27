<script setup lang="ts">
import { numberParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const someNumber = useQueryParam("someNumber", numberParam());
</script>

<template>
  <Example title="A query param of type number">
    The value of <strong>someNumber</strong> is:
    <pre v-if="someNumber !== undefined">{{ someNumber }}</pre>
    <pre v-else>undefined</pre>

    <p>(someNumber ?? 0) * 2 = {{ (someNumber ?? 0) * 2 }}</p>

    <Actions>
      <button @click="someNumber = 5">
        someNumber = 5
      </button>
      <button @click="someNumber = 3.1415">
        someNumber = 3.1415
      </button>
      <button @click="someNumber = 0">
        someNumber = 0
      </button>
      <button @click="someNumber = undefined">
        someNumber = undefined
      </button>
    </Actions>
  </Example>
</template>