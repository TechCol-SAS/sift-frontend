<script setup lang="ts">
import { useTemplateStore } from 'src/stores/template-store';

const templateStore = useTemplateStore();
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
              v-model="templateStore.template.name"
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
              <q-btn
                icon="add"
                color="primary"
                flat
                round
                dense
                @click="templateStore.addColumn()"
              />
            </div>

            <div class="columns-list custom-scrollbar">
              <div
                v-for="column in templateStore.template.columns"
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
                    :options="templateStore.columnTypes"
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
                    @click="templateStore.removeColumn(column.id)"
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
      <!-- Right Card: Preview -->
      <q-card class="glass-card full-height" flat bordered>
        <q-card-section class="q-pa-lg">
          <h3 class="text-white">Card Derecho</h3>
          <p class="text-grey-6">Este es el contenido del card derecho</p>
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
</style>
