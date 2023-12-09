<template>
	<div 
		class="todo-item"
		v-for="todo in store.ToDos"
	>
		<ToDoItem 
			v-if="todo.projectId===route.params.projectId"
			v-bind:todo="todo" 
		/>
	</div>
</template>

<script setup>
	import { useRoute } from 'vue-router';
	import { useToDoStore } from '../../stores/ToDoStore';
import ToDoItem from '../ToDoItem.vue';

	const store = useToDoStore();
	const route = useRoute();
</script>

<style scoped>

</style> 