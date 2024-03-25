<template>
    <header class="header">
        <NavBar></NavBar>
    </header>
    <TheLayout>
        <router-view></router-view>
    </TheLayout>
</template>

<script setup>
import './assets/base.css';
import NavBar from "./components/NavBar.vue";
import TheLayout from "./components/TheLayout.vue";
</script>

<style scoped>
.header {
    height: 80px;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
}
</style>