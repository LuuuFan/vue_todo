import Vue from 'vue';
import Router from 'vue-router';
import About from './views/about.vue';
import Home from './views/home.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/about',
			name: 'about',
			component: About
		}
	]
})