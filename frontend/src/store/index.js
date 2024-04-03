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
    state() {
        return {
            showPostUpload: false,
        }
    },
    mutations: {
        changeShowPostUpload(state, show) {
            state.showPostUpload = show;
        }
    },
    actions: {}
})