<template>
    <img :src="src || avatarDefault" alt="" class="avatar">
</template>

<script setup>
import avatarDefault from "../assets/avatarDefault.png";

defineProps({
    src: String,
    width: {
        type: Number,
        default: 34,
    },
    height: {
        type: Number,
        default: 34,
    },
})
</script>

<style>
.avatar {
    width: v-bind(width + "px");
    height: v-bind(height + "px");
    background: #eee;
    border-radius: 50%;
}
</style>