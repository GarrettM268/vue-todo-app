import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useToDoStore = defineStore('counter', () => {
	/** states */
	const ToDos = ref([{
		text: 'this is a sample to-do',
		id: Math.floor(Math.random() * 1000000),
		projectId: -1,
		completed: false
	}])
	const tempPid = -2
  	/** getters */
	const doubleCount = computed(() => count.value * 2)

	/** actions */
	function addToDo(_text, _pid) {
		ToDos.value.push({ text: _text, id: Math.floor(Math.random() * 1000000), projectId: _pid, completed: false });
		console.log('item added in store')
	}
	function deleteToDo(id) {
		for (let i = 0; i < ToDos.value.length; i++) {
			if (ToDos.value[i].id === id) {
				ToDos.value.splice(i, 1);
			}
		}
	}
		
	return { ToDos, addToDo, deleteToDo }
})
