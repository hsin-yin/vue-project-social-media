<template>
  <TheModal @close="$store.dispatch('hidePostDetails')">
    <div class="postDetails">
        <img class="postImage" :src="post.image" alt="">
        <div class="postMeta">
            <div class="author">
                <TheAvatar :src="post.user?.avator"/>
                <span>{{ post.user?.name }}</span>
            </div>
            <pre class="postDesc">{{ post.description }}
            </pre>
            <div class="comments">
                <div class="comment" v-for="comment in comments">
                    <TheAvatar :src="comment.user?.avatar"/>
                    <span class="user">{{ comment.user?.name }}</span>
                    <span class="commentDate">{{ dateToRelative(comment.pubDate) }}</span>
                    <p class="commentContent">{{ comment.content }}</p>
                </div>
            </div>
            <div class="actions">
              <PostActions
              :likes="post.liked_bies"
              :comments="post.comments"
              :favors="post.favored_bies"
              :likedByMe="post.likedByMe"
              :favoredByMe="post.favoredByMe"
              @likeClick="$store.dispatch('toggleLike', post.id)"
              @favorClick="$store.dispatch('toggleFavor', post.id)"
              />
              <span class="postPubDate">{{ dateToRelative(post.publishedAt) }}</span>
              <input type="text" name="comment" id="" class="commentInput" placeholder="留言" v-model="content">
              <button @click="store.dispatch('addComment', {content, postId: post.id})" class="commentPubBtn">發布</button>
            </div>
        </div>
    </div>
  </TheModal>
</template>

<script setup>
import TheIcon from "./TheIcon.vue";
import TheAvatar from "./TheAvatar.vue";
import PostActions from "./PostActions.vue";
import TheModal from "./TheModal.vue";
import {dateToRelative} from "../utils/date";
import {useStore} from "vuex";
import {computed, ref} from "vue";

const content = ref("");
const store = useStore();
const post = computed(() => store.getters.postDetails);
const comments = computed(() => store.state.comment.list);
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
.postDetails {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 300px);
  grid-template-rows: minmax(0, 1fr);
  width: 100%;
  height: 100%;
  border: none;
}
.postImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
}
.postMeta {
  padding: 20px;
  padding-top: 36px;
  display: grid;
  align-items: start;
  grid-template-rows: max-content max-content 1fr max-content;
  max-height: 100%;
  height: 100%;
}

.author {
  display: flex;
  align-items: center;
  gap: 10px;
}
.postDesc {
  width: 100%;
  white-space: pre-wrap;
  margin-top: 24px;
}
.comments {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-gap: 28px;
  align-items: start;
  overflow-y: auto;
  height: 100%;
}
.comment {
  display: grid;
  grid-template-areas:
    "avatar name date"
    "comment comment comment";
  grid-template-columns: 34px 1fr 1fr;
  align-items: center;
  column-gap: 10px;
  row-gap: 14px;
}
.commentDate {
  grid-area: date;
  justify-self: end;
  color: #a7a7a7;
}
.commentContent {
  grid-area: comment;
}

.actions {
  border-top: 1px solid #eaeaea;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  margin: 20px -24px 0px -24px;
  padding: 20px 24px 0 24px;
  row-gap: 16px;
}
.postActions > :deep(svg) {
  transform: scale(0.8125);
}
.postPubDate {
  color: #9f9f9f;
  grid-column: 2 / 6;
  justify-self: end;
  font-size: 14px;
}
.commentInput {
  background: #f7f7f7;
  border-radius: 16px;
  border: none;
  grid-column: 1 / 3;
}
.commentInput::placeholder {
  color: #b9b9b9;
  border: none;
}
.commentPubBtn {
  color: #1da0ff;
  border: none;
  background: none;
  font-size: 16px;
  /* margin-left: 20px; */
  grid-column: 4 / 6;
}
</style>