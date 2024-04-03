import { createPost } from "../../apis/post";

export const post = {
    state() { },
    mutations: {},
    actions: {
        async uploadPost({ commit, dispatch }, { image, description }) {
            await createPost(image, description);
            commit("changeShowPostUpload", false);
        }
    }
}