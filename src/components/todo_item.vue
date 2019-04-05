<template>
	<span class="todo-item" v-bind:class="{'completed': todo.done}">
		<input type="checkbox" v-on:change="markDone" >
		{{ todo.name }}
		<button class='delete' @click="$emit('deleteTodo', todo.id)">x</button>
	</span>
</template>
<script type="text/javascript">
	export default {
		name: 'TodoItem',
		props: ["todo"],
		methods: {
			markDone(){
				this.todo.done = !this.todo.done;
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

	}
</style>