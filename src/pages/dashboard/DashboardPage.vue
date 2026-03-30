<script setup lang="ts">
import DashboardCard from 'src/components/dashboard/DashboardCard.vue';
</script>

<template>
  <div class="row q-col-gutter-md q-col-gutter-lg-lg">
    <div class="col-12 col-md-6 col-lg-4">
      <DashboardCard
        icon="description"
        title="Crear plantilla"
        description="Diseña y personaliza nuevas plantillas para tus documentos."
        to="/dashboard/create-template"
      />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <DashboardCard
        icon="schedule"
        title="Ver Historial"
        description="Consulta el registro de todos los formatos generados anteriormente."
        to="/dashboard/history"
      />
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <DashboardCard
        icon="settings"
        title="Generar Formatos"
        description="Crea nuevos documentos a partir de tus plantillas existentes."
        to="/dashboard/generate-formats"
      />
    </div>
  </div>
</template>
