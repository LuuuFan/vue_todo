<template>
	<li class="todo-item">
		<input type="checkbox" v-on:change="$emit('markDone', todo.id)" v-model="todo.completed">
		<span v-bind:class="{'completed': todo.completed}">
			{{ todo.title }}
		</span>
		<button class='delete' @click="$emit('deleteTodo', todo.id)">
			<span>&times;</span>
		</button>
	</li>
</template>
<script type="text/javascript">
	export default {
		name: 'TodoItem',
		props: ["todo"],
		methods: {
		},
	}
</script>
<style>
	.todo-item{
		display: flex;
		align-items: center;
		width: 100%;
	}

	.completed{
		text-decoration: line-through;
	}

	.delete{
		margin-left: auto;
	}
	.delete span{
		text-decoration: none;
	}
</style>