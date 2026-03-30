<script setup lang="ts">
import type { IProps } from 'src/models/interfaces/props.interface';

defineProps<IProps>();
</script>

<template>
  <q-card class="dashboard-card glass-card-hover" flat bordered>
    <q-card-section class="q-pt-lg q-pt-md-xl q-pb-md q-pb-md-lg q-px-md q-px-md-lg">
      <div class="card-content-wrapper">
        <div class="icon-background glass-item q-pa-xs q-mb-sm">
          <q-icon :name="icon" size="24px" color="primary" />
        </div>

        <h3 class="card-title text-h6 text-md-h5 text-weight-bold text-white q-mb-sm">
          {{ title }}
        </h3>

        <p class="text-body2 text-grey-6 q-mb-md q-mb-md-lg" style="line-height: 1.6">
          {{ description }}
        </p>

        <q-btn
          unelevated
          no-caps
          class="access-btn"
          label="Acceder"
          icon-right="north_east"
          :to="to"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="scss">
.dashboard-card {
  cursor: pointer;
  height: 100%;

  &:hover {
    .card-title {
      color: var(--q-primary);
    }

    .access-btn {
      background: var(--q-primary) !important;
      color: black !important;
    }
  }
}

.card-content-wrapper {
  max-width: 100%;

  @media (min-width: 1024px) {
    max-width: 350px;
  }
}

.icon-background {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
}

.card-title {
  transition: color 0.3s ease;
}

.access-btn {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;

  &:hover {
    background: var(--q-primary) !important;
    color: black !important;
  }
}
</style>
