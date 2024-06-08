import { createRouter, createWebHistory } from 'vue-router'

import LevelView from '../components/LevelView.vue'
import HomePage from '../components/HomePage.vue'
import LevelSelect from '../components/LevelSelect.vue'
import { pathMatch } from "https://deno.land/x/oak@v16.0.0/deps.ts";
import { levels } from '../components/testdata/levels.ts'

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/levels",
        name: "Level Select",
        component: LevelSelect
    },
    {
        path: "/levels/:main/chapters/:sub",
        name: "Level",
        component: LevelView
    }
]

const router = createRouter({
    history: createWebHistory("/"),
    routes,
})

export default router