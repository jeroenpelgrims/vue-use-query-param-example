<script setup lang="ts">
import { StringParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

const var1 = useQueryParam("var1", StringParam);
const var2 = useQueryParam("var2", StringParam);
const var3 = useQueryParam("var3", StringParam);
</script>

<template>
  <Example title="Setting multiple query params simultaneously">
    <pre>
      The value of <strong>var1</strong> is '{{ var1 }}'
      The value of <strong>var2</strong> is '{{ var2 }}'
      The value of <strong>var3</strong> is '{{ var3 }}'
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
        var1 = null;
        var2 = null;
        var3 = null;
      }">
        Set all variables to null
      </button>
      
    </Actions>
  </Example>
</template>