import { createRouter, createWebHistory } from 'vue-router'

import LevelView from '../components/LevelView.vue'
import HomePage from '../components/HomePage.vue'
import LevelSelect from '../components/LevelSelect.vue'
import { pathMatch } from "https://deno.land/x/oak@v16.0.0/deps.ts";

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
    },
    {
        path: "/levels",
        name: "Level Select",
        component: LevelSelect
    },
    {
        path: "/levels/:id",
        name: "Level",
        component: LevelView
    }
]

const router = createRouter({
    history: createWebHistory("/"),
    routes,
})

export default router