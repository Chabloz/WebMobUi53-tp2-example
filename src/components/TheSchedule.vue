<script setup>
  import { useFetchJson } from '../composables/useFetchJson';
  const {data, error, loading} = useFetchJson(import.meta.env.VITE_JSON_URL);
</script>

<template>
  {{  data }}
</template>

<style scoped>

</style>