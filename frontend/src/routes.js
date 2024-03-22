import HomePage from "./pages/HomePage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import ProfileEdittingPage from "./pages/ProfileEdittingPage.vue";
import SearchPage from "./pages/SearchPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import { createRouter } from "../node_modules/vue-router/dist/vue-router";
import { createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/search_result",
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

export { router };