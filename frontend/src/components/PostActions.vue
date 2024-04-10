<template>
    <div class="postActions">
        <TheIcon
            @click="emit('likeClick')"
            icon="like"
            :fill="likedByMe ? '#FF3C3C' : 'none'"
            :stroke="likedByMe ? '#FF3C3C' : '#000000'"
        />
        <span>{{ likes || "" }}</span>

        <TheIcon
            icon="comment"
            fill="none"
            stroke="#000000"
            @click="emit('commentsClick')"
        />
        <span>{{ comments || "" }}</span>

        <TheIcon
            icon="favorite"
            :fill="favoredByMe ? '#FFD12E' : 'none'"
            :stroke="favoredByMe ? '#FFD12E' : '#000000'"
            @click="emit('favorClick')"
        />
        <span>{{ favors || "" }}</span>
    </div>
</template>

<script setup>
import TheIcon from "./TheIcon.vue";

defineProps({
    // 點讚數
	likes: Number,
	// 評論數
	comments: Number,
	// 收藏數
	favors: Number,
	// 是否被當前使用者點讚
	likedByMe: Boolean,
	// 是否被當前使用者收藏
	favoredByMe: Boolean,
})
const emit = defineEmits([
    "likeClick",
	"commentsClick",
	"favorClick",
])
</script>

<style scoped>
.postActions {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    justify-self: end;
    column-gap: 16px;
    row-gap: 4px;
}
.postActions > svg {
    width: 32px;
    height: 32px;
    grid-row: 1/2;
    cursor: pointer;
}
.postActions > span {
  font-size: 14px;
}
</style>