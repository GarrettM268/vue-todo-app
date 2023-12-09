<template>
    <div v-for="todo in store.ToDos">
        <ToDoItem v-bind:todo="todo" />
    </div>
</template>

<script setup>
    import ToDoItem from './ToDoItem.vue';
    import { useToDoStore } from '../stores/ToDoStore';

    const store = useToDoStore();
    
</script>

<style scoped>

</style>
