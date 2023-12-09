<template>
	<Teleport to="#Chewbacca">
		<div  v-if="store.showModal" class="overlay">
			<ToDoModal 
				@close="(i) => store.showModal = i"
				@add-project="addProject"
			/>
		</div>
	</Teleport>
	<select 
		@change="$emit('update:modelValue', $event.target.value)"
		:value="modelValue"	
	>
		<option disabled value="">select or add a project</option>
		<option 
			v-for="project in store.projects"
			:value="project.id"
			>{{ project.name }}
		</option> <!-- when this option is selected, I want to save project.id to the tempPid in ToDoStore-->
	</select>
</template>

<script setup>
	import { ref } from 'vue'
	import ToDoModal from './ToDoModal.vue'
	import { useProjectStore } from '../stores/ProjectsStore'
	import { useToDoStore } from '../stores/ToDoStore';

	const toDoStore = useToDoStore();
	const store = useProjectStore();

	function addProject(projectName) {
		store.addProject(projectName)
	}
	const emits = defineEmits(['update:modelValue'])

	const props = defineProps(['modelValue'])
	const selected = ref(''); /** this is project.name of the selected option */
	toDoStore.tempPid = store.findProjectIdWithName(selected)	/** do this inside the sortByProject method?? returns the id of the selcted project. 
																	this must then be assigned to the corresponding ToDo Item somehow.*/
																	/**Ideally: when the option is selected,  */

</script>

<style scoped>
	
</style>