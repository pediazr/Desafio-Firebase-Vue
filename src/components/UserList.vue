<script setup>
import { defineProps } from 'vue';
import { useColaboradoresStore } from '../stores/useColaboradoresStore';

const props = defineProps({'colaboradores': Array});

const store = useColaboradoresStore();

const deleteColaborador = async (id) => {
    await store.deleteColaborador(id);
}

</script>

<template>

<div class=" p-5">
    <h2 class="text-center m-4 text-decoration-underline">Colaboradores Registrados</h2>
    <table class="table table-bordered table-striped text-center">
      <thead>
        <tr>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Correo Electronico</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="colaborador in colaboradores" :key="colaborador.id">
          <th scope="row">{{ colaborador.id}}</th>
          <td>{{ colaborador.nombre }}</td>
          <td>{{ colaborador.email }}</td>
          <td>
            <button @click="deleteColaborador(colaborador.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
</div>

</template>