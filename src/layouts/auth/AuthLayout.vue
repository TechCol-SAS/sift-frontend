<script setup lang="ts">
import { useQuasar } from 'quasar';

import { useThemeStore } from 'src/stores/theme-store';

const $q = useQuasar();
const themeStore = useThemeStore();

$q.dark.set(themeStore.darkMode);
</script>

<template>
  <q-layout view="hHr LpR lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss"></style>
