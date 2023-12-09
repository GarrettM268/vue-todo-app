import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore("projects", {
	state: () => ({
		projects: [{
			name: "Sample Project",
			id: Math.floor(Math.random() * 1000000),
		}], 
		showModal: ref(false)
	}),

	actions: {
		addProject(projectName) {
			this.projects.push({ /* push a new note onto the notes state */
				name: projectName,
				id: Math.floor(Math.random() * 1000000)
			})
			this.showModal = false; 
		},

		findProjectIdWithName(name) {
			for (const project of this.projects) {
				if (project.name === name) {
					return project.id
				}	
			}
			console.log(name, 'id not found')
		},

		findProjectIdWithId(id) {
			for (const project of this.projects) {
				if (project.id === id) {
					return project.name
				}	
			}
			console.log(name, 'id not found')
		}
	}
})
