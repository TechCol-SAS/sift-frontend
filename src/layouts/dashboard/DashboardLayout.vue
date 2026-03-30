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
      <q-page class="q-pa-md q-pa-md-xl page-content">
        <div class="content-wrapper">
          <div class="q-mt-xl q-pt-lg q-mb-xl q-pb-lg">
            <p class="text-primary text-overline text-h6 q-mb-none panel-control">
              PANEL DE CONTROL
            </p>
            <h2 class="text-white text-weight-bold text-h3 q-mb-sm q-mt-none">
              Gestión de formatos
            </h2>
            <p class="text-grey-6 text-body1 q-mb-md" style="max-width: 700px">
              Crea, visualiza y genera documentos de manera eficiente con nuestras
              <br class="gt-sm" />
              herramientas integradas.
            </p>
          </div>

          <RouterView />
        </div>

        <div class="footer-container text-center">
          <p class="text-caption text-grey-6 q-mb-xs">
            Desarrollado por TechCol Lab <q-icon name="favorite" color="primary" size="14px" />
          </p>
          <a
            href="https://github.com/TechCol-SAS"
            target="_blank"
            rel="noopener noreferrer"
            class="github-link text-grey-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.panel-control {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: 'Roboto Condensed', 'Arial Narrow', sans-serif;
}

.page-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  max-width: 1600px;
  margin: 0 auto;
  flex: 1;
}

.footer-container {
  max-width: 1600px;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 32px;
}

.github-link {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: var(--q-primary);
  }

  svg {
    transition: color 0.3s ease;
  }
}
</style>
