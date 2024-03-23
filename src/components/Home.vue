<script setup lang="ts">
import { useRoute } from "vue-router";
import { NumberParam, StringParam, useQueryParam } from "vue-use-query-param";

const route = useRoute();

const foo = useQueryParam("foo", StringParam);
const pi = useQueryParam("pi", NumberParam);
const alfa = useQueryParam("alfa", StringParam);
const beta = useQueryParam("beta", StringParam);
</script>

<template>
  {{ route.fullPath }}

  <fieldset>
    <legend>Foo</legend>
    <strong>'{{ foo ?? "undefined" }}'</strong>

    <div>
      <button @click="() => foo = 'something'">Set to value</button>
      <button @click="() => foo = ''">Set to empty string</button>
      <button @click="() => foo = null">Clear</button>
    </div>
  </fieldset>

  <fieldset>
    <legend>Pi</legend>
    <strong>'{{ pi ?? "undefined" }}' / {{ (pi ?? 0) + 5 }}</strong>

    <div>
      <button @click="() => pi = 3.1415">Set to value</button>
      <button @click="() => pi = 0">Set to 0</button>
      <button @click="() => pi = null">Clear</button>
    </div>
  </fieldset>


  <fieldset>
    <legend>Bar & Baz</legend>
    <span>Alfa: <strong>'{{ alfa ?? "undefined" }}'</strong></span>
    <span>Beta: <strong>'{{ beta ?? "undefined" }}'</strong></span>

    <div>
      <button @click="() => { alfa = 'alfa'; beta = 'beta'; }">
        Set to values
      </button>
      <button @click="() => { alfa = ''; beta = ''; }">
        Set to empty string
      </button>
      <button @click="() => { alfa = null; beta = null; }">
        Clear
      </button>
    </div>
  </fieldset>

  <RouterLink to="/about">About</RouterLink>
</template>

<style scoped lang="scss">
:global(body>div) {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

fieldset {
  display: flex;
  flex-direction: column;
}
</style>