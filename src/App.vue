<template>
  <div id="app">
    <Main v-bind:todos="todos" v-on:deleteTodo="deleteTodo"/>
  </div>
</template>

<script>
import Main from './components/main.vue'

export default {
  name: 'app',
  data(){
    return {
      todos: [
          {
            id: 1,
            name: "Buy bread",
            done: false,
          },
          {
            id: 2,
            name: "Learn vue",
            done: true,
          },
          {
            id: 3,
            name: "Finish vue-todo project",
            done: false,
          }
        ]
    }
  },
  components: {
    Main
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    }
  }
}
</script>

<style>
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
