<script setup lang="ts">
import { stringParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const var1 = useQueryParam("var1", stringParam());
const var2 = useQueryParam("var2", stringParam());
const var3 = useQueryParam("var3", stringParam());
</script>

<template>
  <Example title="Setting multiple query params simultaneously">
    <pre>
      The value of <strong>var1</strong> is <span v-if="var1 !== undefined">'{{ var1 }}'</span><span v-else>undefined</span>
      The value of <strong>var2</strong> is <span v-if="var2 !== undefined">'{{ var2 }}'</span><span v-else>undefined</span>
      The value of <strong>var3</strong> is <span v-if="var3 !== undefined">'{{ var3 }}'</span><span v-else>undefined</span>
    </pre>

    <Actions>
      <button @click="() => {
        var1 = 'a'
        var2 = 'b'
        var3 = 'c'
      }">
        Set all variables to a value
      </button>
      <button @click="() => {
        var1 = '';
        var2 = '';
        var3 = '';
      }">
        Set all variables to an empty string
      </button>

      <button @click="() => {
        var1 = undefined;
        var2 = undefined;
        var3 = undefined;
      }">
        Set all variables to undefined
      </button>

    </Actions>
  </Example>
</template>