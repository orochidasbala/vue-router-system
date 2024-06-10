import { createRouter, createWebHistory } from "vue-router";
// user section
import HomeView from "../components/UserHome/HomeView.vue";
// admin section

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
