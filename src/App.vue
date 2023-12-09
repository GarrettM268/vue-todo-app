<script setup>
    import { useProjectStore } from './stores/ProjectsStore';

    const store = useProjectStore();
</script>

<template>
    <div id="nav">
        <router-link :to="{name: 'Home'}">To-do List</router-link>
        <router-link 
            :to="{path: `/project/${project.id}`}"
            v-for="project in store.projects"
        >{{ project.name }}</router-link> <!-- pass project to the about page? -->
    </div>
    <router-view/>
</template>

<style scoped>
    #nav {
        text-align: center;
    }
    a {
        padding: 10px;
        color: seagreen;
    }
</style>
