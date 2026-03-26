<script setup lang="ts">
import { useQuasar } from 'quasar';

import { useThemeStore } from 'src/stores/theme-store';

const $q = useQuasar();
const themeStore = useThemeStore();

$q.dark.set(themeStore.darkMode);
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="row full-height">
        <!-- Panel izquierdo - solo visible en md+ -->
        <div
          v-if="$q.screen.gt.sm"
          class="col-md-7 rounded-left-section text-white column justify-center items-center"
        >
          <div class="overlay"></div>
          <div class="q-z-max q-px-xl" style="max-width: 550px; margin: 0 auto; width: 100%">
            <div class="text-center q-mb-xl">
              <h1 class="brand-title q-mb-md q-ma-none">Sift</h1>
              <p class="brand-subtitle text-h5 q-ma-none">
                Transforma tu flujo de datos<br />
                en una experiencia extraordinaria
              </p>
            </div>

            <div class="column q-gutter-md">
              <div class="feature-card row items-start q-pa-lg">
                <div class="feature-icon-wrapper">
                  <q-icon name="description" size="32px" />
                </div>
                <div class="col q-ml-md">
                  <div class="text-weight-bold q-mb-xs text-subtitle1 text-white">
                    Plantillas Inteligentes
                  </div>
                  <div class="text-body2 feature-description">
                    Crea y reutiliza templates para optimizar tu trabajo
                  </div>
                </div>
              </div>

              <div class="feature-card row items-start q-pa-lg">
                <div class="feature-icon-wrapper">
                  <q-icon name="sync" size="32px" />
                </div>
                <div class="col q-ml-md">
                  <div class="text-weight-bold q-mb-xs text-subtitle1 text-white">
                    Conversión Automática
                  </div>
                  <div class="text-body2 feature-description">
                    Transforma formatos al instante sin complicaciones
                  </div>
                </div>
              </div>

              <div class="feature-card row items-start q-pa-lg">
                <div class="feature-icon-wrapper">
                  <q-icon name="data_object" size="32px" />
                </div>
                <div class="col q-ml-md">
                  <div class="text-weight-bold q-mb-xs text-subtitle1 text-white">
                    Múltiples Destinos
                  </div>
                  <div class="text-body2 feature-description">
                    Exporta a donde necesites con total flexibilidad
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel derecho - formulario -->
        <div
          class="col-12 col-md-5 column justify-center items-center"
          :class="$q.screen.gt.sm ? 'q-pa-xl' : 'q-pa-md'"
        >
          <RouterView />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.rounded-left-section {
  background-image: url('auth/bg-auth.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, rgba(21, 142, 217, 0.43), transparent 70%),
    linear-gradient(to top, rgb(24, 6, 6), transparent 90%);
  z-index: 1;
}

.q-z-max {
  z-index: 2;
  position: relative;
}

.logo-background {
  width: 100px;
  height: 100px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.logo-background:hover {
  transform: translateY(-4px);
}

.brand-title {
  font-size: 4.5rem;
  font-weight: 800;
  letter-spacing: -3px;
  background: linear-gradient(135deg, #ffffff 0%, #2196f3 50%, #64b5f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  text-shadow: 0 4px 20px rgba(33, 150, 243, 0.3);
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
  font-family:
    'Inter',
    'Roboto',
    -apple-system,
    sans-serif;
}

.brand-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.5px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover {
  transform: translateX(8px);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon-wrapper {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(33, 150, 243, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2196f3;
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon-wrapper {
  background: rgba(33, 150, 243, 0.3);
  transform: scale(1.1);
}

.feature-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}
</style>
