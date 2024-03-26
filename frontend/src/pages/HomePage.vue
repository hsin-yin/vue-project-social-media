<template>
    <div>
        <PostList>
            <PostItem v-for="n in 10"></PostItem>
        </PostList>
        <!-- <PostUpload></PostUpload> -->
        <!-- <PostDetails></PostDetails> -->
    </div>
</template>

<script setup>
import PostList from '../components/PostList.vue';
import PostItem from '../components/PostItem.vue';
import PostUpload from '../components/PostUpload.vue';
import PostDetails from '../components/PostDetails.vue';
</script>

<style scoped>
</style>
