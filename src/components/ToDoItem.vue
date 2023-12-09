<template>
	<div class="todo-item"> 
            <input type="checkbox"> <!-- toggles if event is active -->
            <p class="todo-text">{{ todo.text }}</p>
            <button @click="store.deleteToDo(todo.id)">X</button> <!-- removes the item -->
            <ProjectSelector v-model="todo.projectId" />
        </div>
</template>

<script setup>
	import ProjectSelector from './ProjectSelector.vue';
	import { useToDoStore } from '../stores/ToDoStore';
	
	const store = useToDoStore();

	const props = defineProps(['todo'])
</script>

<style scoped>
    .todo-item {
        display: flex;
        padding-top: 10px;
    }
    .todo-text {
        padding-left: 4px;
        padding-right: 4px;
    }
</style>