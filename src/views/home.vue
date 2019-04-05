<template>
  <div id="home">
    <AddTodo v-on:addTodo="addTodo"/>
    <Main v-bind:todos="todos" v-on:deleteTodo="deleteTodo"/>
  </div>
</template>

<script>
import Main from '../components/main.vue'
import AddTodo from '../components/add_todo.vue'

export default {
  name: 'Home',
  data(){
    return {
      todos: [],
    }
  },
  components: {
    // Header,
    Main,
    AddTodo,
  },
  methods: {
    deleteTodo(id) {
      fetch("https://jsonplaceholder.typicode.com/todos/${id}", {
        method: 'DELETE',
      }).then(res => res.json())
      .then(() => {
        this.todos = this.todos.filter(t => t.id !== id);
      })
    },
    addTodo(t){
      fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        data: JSON.stringify(t),
        headers: {
            "Content-Type": "application/json",
        }
      }).then(res => res.json())
      .then(data => {
        this.todos = [...this.todos, Object.assign({}, data, t)];
      })
    },
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res => res.json()).then(data => this.todos = data)
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app { 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px auto;
  width: 50%;
}
</style>
