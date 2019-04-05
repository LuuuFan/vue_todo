<template>
	<header>
		<h1>Todo List</h1>
		<nav>
      <router-link to='/'>Home</router-link> | 
      <router-link to='/about'>About</router-link>
    </nav>
	</header>
</template>
<script type="text/javascript">
	export default {
		name: "Header",
	}
</script>
<style type="text/css">
	header{
		padding: 5px 0;
		background: #333;
		color: white;
		margin-bottom: 5px;
	}
	nav a{
		text-decoration: none;
		color: white;
	}
</style>