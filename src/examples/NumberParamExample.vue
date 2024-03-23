<script setup lang="ts">
import { NumberParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const someNumber = useQueryParam("someNumber", NumberParam);
</script>

<template>
  <Example title="A query param of type number">
    The value of <strong>someNumber</strong> is:
    <pre v-if="someNumber !== null">{{ someNumber }}</pre>
    <pre v-else>null</pre>

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
      <button @click="someNumber = null">
        someNumber = null
      </button>
    </Actions>
  </Example>
</template>