<template>
    <div>
        <h2 class="title">搜索結果：植物</h2>
        <PostList>
            <PostItem v-for="n in 10"></PostItem>
        </PostList>
    </div>
</template>

<script setup>
import PostList from '../components/PostList.vue';
import PostItem from '../components/PostItem.vue';
</script>

<style scoped>
.title {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 30px;
}
</style>
