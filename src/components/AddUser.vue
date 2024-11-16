<script setup>
import { ref } from 'vue'
import { useColaboradoresStore } from '../stores/useColaboradoresStore';

const nombre = ref('');
const email= ref('');
const store = useColaboradoresStore();

const addColaborador = async () => {
    if(nombre.value.trim() === '' || email.value.trim() === '') {
        return;
    }
    await store.addColaborador({ nombre: nombre.value, email: email.value });
    nombre.value = '';
    email.value = '';
}
</script>
<template>
    <h2 class="my-4 text-decoration-underline">Agregar Colaborador</h2>
    <form @submit.prevent="addColaborador">
        <input v-model="nombre" placeholder="Nombre del Colaborador" type="text">
        <input v-model="email" placeholder="Correo Electronico" type="text">
        <button type="submit">Agregar</button>
    </form>
</template>