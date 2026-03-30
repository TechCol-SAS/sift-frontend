<script setup lang="ts">
import DashboardCard from 'src/components/dashboard/DashboardCard.vue';
</script>

<template>
  <div class="cards-container">
    <DashboardCard
      icon="description"
      title="Crear plantilla"
      description="Diseña y personaliza nuevas plantillas para tus documentos."
    />
    <DashboardCard
      icon="schedule"
      title="Ver Historial"
      description="Consulta el registro de todos los formatos generados anteriormente."
    />
    <DashboardCard
      icon="settings"
      title="Generar Formatos"
      description="Crea nuevos documentos a partir de tus plantillas existentes."
    />
  </div>
</template>

<style scoped lang="scss">
.cards-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1920px) {
    gap: 32px;
  }
}
</style>
