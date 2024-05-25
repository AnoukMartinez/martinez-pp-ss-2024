import { createRouter, createWebHistory } from 'vue-router'

import LevelView from '../components/LevelView.vue'
import HomePage from '../components/HomePage.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/level1",
        name: "Level One",
        component: LevelView
    }
]

const router = createRouter({
    history: createWebHistory("/"),
    routes,
})

export default router