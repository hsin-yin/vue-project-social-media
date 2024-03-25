<template>
    <Teleport to="body">
        <div class="modal">
            <div class="backdrop"></div>
            <div class="modalContent">
                <button class="closeBtn"><TheIcon icon="close"/></button>
                <slot></slot>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import TheIcon from "./TheIcon.vue";
import TheAvatar from "./TheAvatar.vue";
import PostActions from "./PostActions.vue";
</script>

<style scoped>
.backdrop {
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 3;
}
.modalContent {
    border-radius: 30px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    z-index: 20;
    width: 70vw;
    height: 65vh;
}
.closeBtn {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 28px;
    height: 28px;
    border: 0;
    background-color: white;
}
.closeBtn svg {
    height: 100%;
    width: 100%;
}
</style>