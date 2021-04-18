const app = new Vue({
    el: '#app',

    data: {
        todo: '',
        todos: ['Go to market', 'Buy shirt']
    },
    methods: {
        saveTodo() {
            this.todos.push(this.todo)
            this.todo = ''
        },

        deleteTodo(index) {
            this.todos.splice(index, 1);
        },
        removeFirst() {
            this.todos.shift();
        }
    }
})