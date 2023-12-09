<template>
	<button @click="filterByProject">group by project</button>
</template>

<script setup>
	import { useProjectStore } from '../stores/ProjectsStore';
	import { useToDoStore } from '../stores/ToDoStore';
	const store = useProjectStore();
	const todoStore = useToDoStore();
	function filterByProject() {
		todoStore.ToDos.sort(function(a, b){return a.projectId - b.projectId});
	}
</script>