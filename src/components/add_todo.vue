<template>
	<div>
		<form @submit="addTodo">
			<input type="text" name="title" placeholder="Add todo..." v-model="title">
			<input type="submit" value="Submit">
		</form>
	</div>
</template>
<script type="text/javascript">
	// import uuid from 'uuid';

	export default {
		name: "AddTodo",
		data(){
			return {
				title: '',
			}
		},
		methods: {
			addTodo(e){
				e.preventDefault();
				const newTodo = {
					// id: uuid.v4(),
					title: this.title,
					done: false,
				};
				console.log(newTodo);
				this.$emit('addTodo', newTodo);
				this.title = "";
			}
		},
	}
</script>
<style type="text/css">
	div{
		width: 100%;
		margin-bottom: 20px;
	}
	form{
		width: 100%;
		display: flex;
		border: 1px solid #333;
		align-items: center;
	}
	input{
		padding: 10px 0;
		text-indent: 20px;
		border: none;
		outline: none;
	}
	input[type='submit']{
		background: #333;
		color: white;
		text-indent: 0;
		padding: 10px 10px;
	}
	input[type='text']{
		flex: 1;
	}
</style>