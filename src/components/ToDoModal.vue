<template>
	<div class="modal">
		<textarea v-model="newProjectName" name="note" id="note" cols="30" rows="10"></textarea> <!-- newProjectName is 2 way binded to the text box-->
		<button @click="addProject">Add Note</button>
		<button class="close" @click="close">Close</button> <!-- listen for click event, on click, hide modal-->
	</div>
</template>

<script setup>
	import { ref } from "vue"
	const newProjectName = ref("") /* Typing in the textbox is a state change */
	const emit = defineEmits(['addProject', 'close'])

	function addProject() {
		emit('addProject', newProjectName.value)
	}
	function close() {
		emit('close')
	}
</script>

<style scoped>
.modal {
	width: 750px;
	background-color: white;
	border-radius: 10px;
	padding: 30px;
	position: relative;
	display: flex;
	flex-direction: column;
}
.modal button {
	padding: 10px 20px;
	font-size: 20px;
	width: 100%;
	background-color: blueviolet;
	border:none;
	color:white;
	cursor: pointer;
	margin-top: 15px;
}

.modal .close {
	background-color: orangered;
}
</style>