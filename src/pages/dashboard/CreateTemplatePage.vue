<script setup lang="ts">
import { useTemplate } from 'src/composables/dashboard/template.composable';

const {
  template,
  columnTypes,
  hasNamedColumns,
  previewRows,
  addColumn,
  removeColumn,
  previewColumns,
} = useTemplate();
</script>

<template>
  <div class="row q-col-gutter-lg">
    <div class="col-12 col-md-6">
      <q-card class="glass-card full-height" flat bordered>
        <q-card-section class="q-pa-lg">
          <h3 class="text-h6 text-weight-bold text-white q-mb-xs">Nueva Plantilla</h3>
          <p class="text-body2 text-grey-6 q-mb-lg">
            Define el nombre y las columnas de tu plantilla
          </p>

          <div class="q-mb-lg">
            <label class="text-body2 text-weight-medium text-white q-mb-sm block">
              Nombre de la Plantilla
            </label>
            <q-input
              v-model="template.name"
              placeholder="Ej: Reporte de Ventas"
              filled
              dense
              dark
              color="primary"
              class="glass-input"
            />
          </div>

          <div class="q-mb-lg">
            <div class="row items-center justify-between q-mb-md">
              <label class="text-body2 text-weight-medium text-white">Columnas</label>
              <q-btn icon="add" color="primary" flat round dense @click="addColumn()" />
            </div>

            <div class="columns-list custom-scrollbar">
              <div
                v-for="column in template.columns"
                :key="column.id"
                class="glass-item-hover q-mb-sm q-pa-sm"
              >
                <div class="row items-center q-gutter-sm no-wrap">
                  <q-icon name="drag_indicator" color="grey-6" size="20px" class="cursor-move" />

                  <span class="text-grey-6 text-body2" style="min-width: 15px">{{
                    column.id
                  }}</span>

                  <q-input
                    v-model="column.name"
                    placeholder="Nombre"
                    filled
                    dense
                    dark
                    color="primary"
                    class="col glass-input"
                  />

                  <q-select
                    v-model="column.type"
                    :options="columnTypes"
                    option-label="label"
                    option-value="value"
                    emit-value
                    map-options
                    filled
                    dense
                    dark
                    color="primary"
                    class="glass-input"
                    style="min-width: 100px"
                  />

                  <q-btn
                    v-if="column.id === 1"
                    flat
                    dense
                    round
                    icon="check"
                    color="primary"
                    size="sm"
                    disable
                  />

                  <q-btn
                    v-else
                    flat
                    dense
                    round
                    icon="delete"
                    color="red"
                    size="sm"
                    @click="removeColumn(column.id)"
                  />
                </div>
              </div>
            </div>
          </div>

          <q-btn
            unelevated
            no-caps
            icon="save"
            label="Guardar Plantilla"
            text-color="black"
            rounded
            color="primary"
            class="full-width"
            size="md"
          />
        </q-card-section>
      </q-card>
    </div>

    <div class="col-12 col-md-6">
      <q-card class="glass-card full-height" flat bordered>
        <q-card-section class="q-pa-lg">
          <h3 class="text-h6 text-weight-bold text-white q-mb-xs">Previsualización</h3>
          <p class="text-body2 text-grey-6 q-mb-lg">Así se verá tu plantilla en Excel</p>

          <div
            v-if="!hasNamedColumns"
            class="flex column items-center justify-center q-pa-xl text-center"
          >
            <q-icon name="table_chart" size="48px" color="grey-7" />
            <p class="text-grey-6 q-mt-md q-mb-none">
              Agrega columnas para ver la previsualización
            </p>
          </div>

          <div v-else class="preview-table-wrapper custom-scrollbar">
            <q-table
              :rows="previewRows"
              :columns="previewColumns()"
              flat
              bordered
              hide-bottom
              :rows-per-page-options="[0]"
              class="preview-table"
            >
              <template #header-cell="props">
                <q-th :props="props" class="preview-header">
                  <div class="column-header">
                    <span class="column-name">{{ props.col.label }}</span>
                    <span class="column-type">({{ props.col.type }})</span>
                  </div>
                </q-th>
              </template>

              <template #body-cell="props">
                <q-td :props="props" class="preview-cell">&nbsp;</q-td>
              </template>
            </q-table>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.columns-list {
  max-height: 300px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.full-height {
  min-height: 400px;
}

.preview-table-wrapper {
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.preview-table {
  background: transparent;

  :deep(.q-table) {
    background: rgba(255, 255, 255, 0.02);
  }

  :deep(thead tr) {
    background: rgba(255, 255, 255, 0.08);
  }

  :deep(th),
  :deep(td) {
    border-color: rgba(255, 255, 255, 0.1);
  }
}

.preview-header {
  .column-header {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .column-name {
    color: white;
    font-weight: 600;
  }

  .column-type {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.75rem;
    font-weight: 400;
  }
}

.preview-cell {
  height: 40px;
  background: rgba(255, 255, 255, 0.02);
}
</style>
