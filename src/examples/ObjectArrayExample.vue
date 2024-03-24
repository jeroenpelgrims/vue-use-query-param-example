<script setup lang="ts">
import { ArrayParam, ObjectParam, useQueryParam } from "vue-use-query-param";
import Actions from "../components/Actions.vue";
import Example from "../components/Example.vue";

type Person = { id: number; name: string };
const people = useQueryParam("people", ArrayParam(ObjectParam<Person>()));
</script>

<template>
  <Example title="Using an array query parameter that contains objects">
    The value of <strong>people</strong> is
    <pre v-if="people !== null">{{ JSON.stringify(people) }}</pre>
    <pre v-else>null</pre>

    <Actions>
      <button @click="() => {
      people = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
    }">
        Set the array to contain some people
      </button>
      <button @click="() => (people = null)">
        people = null
      </button>
    </Actions>
  </Example>
</template>