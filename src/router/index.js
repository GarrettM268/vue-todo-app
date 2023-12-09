import { createRouter, createWebHistory } from "vue-router";

import HomeView from '../components/pages/HomeView.vue'
import ProjectView from '../components/pages/ProjectView.vue'

const routes = [
	{
		path: '/', 
		name: 'Home',
		component: HomeView
	}, 
	{
		path: '/project/:projectId',
		name: 'Project',
		component: ProjectView
	}
]

 
const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router