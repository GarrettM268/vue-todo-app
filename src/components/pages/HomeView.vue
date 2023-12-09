<template>
	<div class="todo-app">
        <div class="top">
            <h1>To Do List</h1>
            <ToDoEntryForm/>
        </div>
        <FilterToDos/>
        <ToDoList/>
  </div>
</template>

<script setup>
	import FilterToDos from '../FilterToDos.vue'
    import ToDoEntryForm from '../ToDoEntryForm.vue';
    import ToDoList from '../ToDoList.vue'
</script>

<style scoped>
	.top {
        text-align: center;
    }
    .todo-app {
        align-items: center;
    }
</style>