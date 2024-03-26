import { createStore } from "vuex"
import { user } from "./user/index";
import { comment } from "./comment/index";
import { post } from "./post/index";

export const store = createStore({
    modules: {
        user,
        comment,
        post,
    },
    state() { },
    mutations: {},
    actions: {}
})