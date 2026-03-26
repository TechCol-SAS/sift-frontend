<script setup lang="ts">
import { ref } from 'vue';

const test = ref('');
</script>

<template>
  <div class="text-center">
    <div class="text-bold" :class="$q.screen.lt.sm ? 'text-h4' : 'text-h2'">Crear Cuenta</div>
    <div class="text-grey-7 text-subtitle1 q-mt-sm">
      Únete a Sift y transforma tu flujo de datos
    </div>
  </div>
  <q-card class="q-mt-md full-width" style="max-width: 550px">
    <q-card-section :class="$q.screen.lt.sm ? 'q-pa-md' : 'q-pa-xl'">
      <q-form class="q-gutter-md">
        <div class="row q-col-gutter-xs">
          <div class="col-12 col-sm-6">
            <label>Nombre</label>
            <q-input
              class="q-mt-sm"
              style="--q-primary: #d9a515; border-color: #d9a515"
              v-model="test"
              type="text"
              placeholder="Juan"
              dense
              filled
              outlined
              lazy-rules
            >
              <template #prepend>
                <q-icon name="person" />
              </template>
            </q-input>
          </div>

          <div class="col-12 col-sm-6">
            <label>Apellido</label>
            <q-input
              class="q-mt-sm"
              style="--q-primary: #d9a515; border-color: #d9a515"
              v-model="test"
              type="text"
              placeholder="Pérez"
              dense
              filled
              outlined
              lazy-rules
            >
              <template #prepend>
                <q-icon name="person" />
              </template>
            </q-input>
          </div>
        </div>

        <div>
          <label>Correo Electrónico</label>
          <q-input
            class="q-mt-sm"
            style="--q-primary: #d9a515; border-color: #d9a515"
            v-model="test"
            type="text"
            placeholder="xxxx123@gmail.com"
            dense
            filled
            outlined
            lazy-rules
          >
            <template #prepend>
              <q-icon name="email" />
            </template>
          </q-input>
        </div>

        <div>
          <label>Contraseña</label>
          <q-input
            class="q-mt-sm"
            style="--q-primary: #d9a515; border-color: #d9a515"
            v-model="test"
            type="password"
            placeholder="*********"
            dense
            filled
            outlined
            lazy-rules
          >
            <template #prepend>
              <q-icon name="lock" />
            </template>
            <template #append>
              <q-btn dense flat round icon="visibility" />
            </template>
          </q-input>
        </div>

        <div>
          <label>Confirmar Contraseña</label>
          <q-input
            class="q-mt-sm"
            style="--q-primary: #d9a515; border-color: #d9a515"
            v-model="test"
            type="password"
            placeholder="*********"
            dense
            filled
            outlined
          >
            <template #prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
        </div>

        <div class="q-mt-lg">
          <q-btn
            class="full-width"
            color="primary"
            text-color="black"
            no-caps
            rounded
            label="Crear Cuenta"
            type="submit"
          />
        </div>
      </q-form>

      <div class="text-center q-mt-md">
        <p class="text-grey-7">
          ¿Ya tienes una cuenta?
          <RouterLink
            style="color: var(--q-primary); text-decoration: none"
            :to="{ name: 'signin' }"
            >Inicia sesión aqui</RouterLink
          >
        </p>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped></style>
