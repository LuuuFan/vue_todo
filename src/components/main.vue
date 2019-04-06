<template>
	<div id='main'>
		<ul>
			<TodoItem v-for="todo in todos" 
				v-bind:key="todo.id" 
				v-bind:todo="todo" 
				v-on:deleteTodo="$emit('deleteTodo', todo.id)" 
				v-on:markDone="$emit('markDone', todo.id)"
			/>
		</ul>
	</div>
</template>
<script type="text/javascript">
	import TodoItem from './todo_item.vue';

	export default{
		name: 'Main',
		props: ["todos"],
		components: {
			TodoItem,
		},
	}
</script>
<style scoped>
	ul{
		list-style: none;
		width: calc(100% - 20px);
		margin: 0;
		padding: 0;
	}
	li{
		width: 100%;
		text-align: left;
		padding: 10px;
		background: #f4f4f4;
		border-bottom: 1px #ccc dotted;
		margin-bottom: 2px;
	}
</style>