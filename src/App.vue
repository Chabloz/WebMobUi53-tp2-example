<script setup>
  import logo from '@/assets/logo.png';
  import TheSchedule from '@/components/TheSchedule.vue';

</script>

<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img :src="logo">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <TheSchedule />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      test
    </q-footer>
  </q-layout>
</template>

<style scoped>

</style>