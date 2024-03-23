<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{ title: string }>();
</script>

<template>
  <fieldset>
    <legend>{{ props.title }}</legend>
    <slot></slot>
  </fieldset>
</template>