<script setup>
import { useColaboradoresStore } from './stores/useColaboradoresStore';
import AddUser from './components/AddUser.vue';
import UserList from './components/UserList.vue';

const store = useColaboradoresStore();
</script>

<template>
<main class="container m-4">
  <h1>Vue Firebase CRUD</h1>
  <AddUser />
  <UserList :colaboradores="store.colaboradores" />
</main>
</template>

<style scoped>

</style>
