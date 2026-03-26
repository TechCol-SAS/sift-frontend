<script setup lang="ts">
import { ref } from 'vue';

const test = ref<string>('');
</script>

<template>
  <div class="text-center">
    <div class="text-bold" :class="$q.screen.lt.sm ? 'text-h4' : 'text-h2'">Iniciar Sesión</div>
    <div class="text-grey-7 text-subtitle1 q-mt-sm">Accede a tu cuenta</div>
  </div>
  <q-card class="q-mt-md full-width" style="max-width: 550px">
    <q-card-section :class="$q.screen.lt.sm ? 'q-pa-md' : 'q-pa-xl'">
      <q-form class="q-gutter-md">
        <div>
          <label>Correo Electrónico</label>
          <q-input
            class="q-mt-sm"
            color="primary"
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
            color="primary"
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
          <RouterLink
            :to="{ name: 'signup' }"
            class="row justify-end cursor-pointer"
            style="color: var(--q-primary); text-decoration: none"
            >¿Olvidaste tu contraseña?</RouterLink
          >
          <q-btn
            class="full-width"
            color="primary"
            text-color="black"
            no-caps
            rounded
            label="Iniciar Sesión"
            type="submit"
          />
        </div>
      </q-form>

      <div class="text-center q-mt-md">
        <p class="text-grey-7">
          ¿No tienes una cuenta?
          <RouterLink
            style="color: var(--q-primary); text-decoration: none"
            :to="{ name: 'signup' }"
            >Regístrate aquí</RouterLink
          >
        </p>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped></style>
