<template>
    <TheModal @close="closePublishPost()">
        <div class="postUpload">
            <label for="fileInput" class="upload">
                <img v-if="imageObjUrl" :src="imageObjUrl" alt="" class="preview">
                <TheIcon v-else icon="upload-image" class="preview"></TheIcon>
                <input id="fileInput" type="file" accept="image/*" class="fileChooser" @change="handleImageUpload">
            </label>
            <div class="postContent">
                <textarea class="postContentInput" placeholder="撰寫貼文..." v-model="description"></textarea>
                <TheButton class="pubBtn" @click="publishPost">發布</TheButton>
            </div>
        </div>
    </TheModal>
</template>

<script setup>
import TheModal from "./TheModal.vue";
import TheIcon from "./TheIcon.vue";
import TheButton from "./TheButton.vue"
import {useStore} from "vuex";
import {ref} from "vue";

const store = useStore();
const imageObjUrl = ref("");
const image = ref(null);
const description = ref("");

function closePublishPost() {
    store.commit("changeShowPostUpload", false);
}
async function handleImageUpload(e) {
    const file = e.target.files[0];
    if(file) {
        const url = URL.createObjectURL(file);
        imageObjUrl.value = url;
        image.value = file;
    };
}
function publishPost() {
    store.dispatch("uploadPost", {
        image: image.value,
        description: description.value,
    });
}

</script>

<style>
/*  */
.postUpload {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 4fr 1fr;
}
.preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
    min-height: 0;
}
.upload {
    display: grid;
    place-items: center;
    cursor: pointer;
    min-height: 0;
    width: 100%;
}
.upload > svg {
    width: 254px;
    height: 316px;
}
.fileChooser {
    opacity: 0;
    position: absolute;
}
.postContent {
    display: grid;
}
.postContentInput {
    border-bottom: none;
    resize: none;
    padding: 12px 24px;
}
.postContentInput::placeholder {
    color: #757575;
}
.pubBtn {
    align-self: end;
    justify-self: end;
    position: relative;
    right: 24px;
    bottom: 18px;
    width: 20%;
}
</style>