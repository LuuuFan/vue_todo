<template>
	<div id='main'>
		<h1>ToDo List</h1>
		<ul>
			<li v-for="todo in todos" v-bind:key="todo.id">
				<TodoItem v-bind:todo="todo" v-on:deleteTodo="$emit('deleteTodo', todo.id)"/>
			</li>
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
		data(){
			return {
				
			}
		},
		method: {

		},
	}
</script>
<style scoped>
	ul{
		list-style: none;
		width: 100%;
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