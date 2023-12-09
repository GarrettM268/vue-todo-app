<template>
    <div>
		<input v-model="todo" type="text" id="to-do-form"/>
		<button id="enter-button" @click="addItem(todo, store.tempPid)">Add</button>
		<button @click="projectStore.showModal=true">Add New Project</button>
	</div>
</template>


<script setup>
	import { useToDoStore } from '../stores/ToDoStore';
	import { useProjectStore } from '../stores/ProjectsStore';
	import { ref } from 'vue'

	const store = useToDoStore();
	const projectStore = useProjectStore();
	const todo = ref('')

	function addItem(item, _pid) {
		store.addToDo(item, -1)
		console.log('Item Added from form')
	}
</script>