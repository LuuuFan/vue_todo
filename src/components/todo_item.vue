<template>
	<span class="todo-item" v-bind:class="{'completed': todo.completed}">
		<input type="checkbox" v-on:change="markDone" >
		{{ todo.title }}
		<button class='delete' @click="$emit('deleteTodo', todo.id)">x</button>
	</span>
</template>
<script type="text/javascript">
	export default {
		name: 'TodoItem',
		props: ["todo"],
		methods: {
			markDone(){
				this.todo.completed = !this.todo.completed;
			}
		},
	}
</script>
<style>
	.todo-item{
		display: flex;
	}

	.delete{
		margin-left: auto;
	}

	.completed{
		text-decoration: line-through;
	}

	.delete{
		margin-left: auto;
	}
</style>