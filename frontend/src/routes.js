import HomePage from "./pages/HomePage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import ProfileEdittingPage from "./pages/ProfileEdittingPage.vue";
import SearchPage from "./pages/SearchPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import { getJwtToken } from "./apis/auth";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/search_result/:term?",
        name: "search_result",
        component: SearchPage,
    },
    {
        path: "/profile",
        name: "profile",
        component: ProfilePage,
    },
    {
        path: "/profile/edit",
        name: "profileEdit",
        component: ProfileEdittingPage
    },
    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    if (to.name !== "login" && !getJwtToken()) {
        return { name: 'login' };
    }
    if (to.name === "login" && getJwtToken()) {
        return { name: 'home' };
    }
})

export { router };