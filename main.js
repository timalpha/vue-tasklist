Vue.component('tasks', {

	props: ['list'],

	template: '#tasks-template',

	computed: {
		remaining: function() {
			return this.list.filter(this.inProgress).length;
		}
	},

	methods: {
		isCompleted: function(task) {
			return task.completed;
		},
		inProgress: function(task) {
			return ! this.isCompleted(task);
		},
		deleteTask: function(task) {
			this.list.splice(this.list.indexOf(task), 1);
		},
		addNewTask: function() {
			this.list.push({body: this.newTaskText, completed: false });
			this.newTaskText = '';
		}
	}

});
new Vue({
	el: '#app',

	data: {
		newTaskText: { body: '', completed: false },
		tasks: [
			// { body: 'Go to the store', completed: false },
			// { body: 'Go to the bank', completed: false },
			// { body: 'Go to the doctor', completed: true }
		]
	},
})