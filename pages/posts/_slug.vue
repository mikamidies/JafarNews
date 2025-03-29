<template>
  <div class="master">
    <div class="container">
      <div class="grid">
        <div class="left">
          <div class="back">
            <NuxtLink :to="localePath(`/posts`)">
              <BackIcon />
              {{ $store.state.translations["main.all_news"] }}
            </NuxtLink>
          </div>
          <h1 class="title">{{ post.title }}</h1>
          <div class="img">
            <img :src="post.image" alt="" />
          </div>
          <div class="tags">
            {{ post.tags }}
          </div>
          <div class="html" v-html="post.text"></div>
        </div>
        <div class="right">
          <div class="stick">
            <HomeOthers class="inner" :posts="post.others" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeOthers from "@/components/HomePage/HomeOthers.vue";
import BackIcon from "~/components/SvgIcons/BackIcon.vue";

import postApi from "@/api/posts";

export default {
  components: {
    HomeOthers,
    BackIcon,
  },

  async asyncData({ $axios, params, query, i18n }) {
    const post = await postApi.getPost(params.slug, $axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    });

    return {
      post,
    };
  },
};
</script>

<style scoped>
.inner {
  padding-top: 0;
  border-top: 0;
  margin-top: 0;
}

.master {
  padding: 48px 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 32px;
}

.left {
  min-width: 0;
}

.right {
  position: relative;
}

.stick {
  position: sticky;
  top: 48px;
}

.back a {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-family: var(--base);
  color: white;
  margin-bottom: 24px;
}

.title {
  font-size: 48px;
  margin-bottom: 16px;
  line-height: 120%;
}

.img img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  border-radius: 12px;
  display: flex;
  margin-bottom: 24px;
}

.html :deep(p) {
  font-size: 18px;
  color: white;
  font-family: var(--base);
  line-height: 150%;
  display: block;
  margin-bottom: 16px;
}

.html :deep(a) {
  color: var(--sky);
}

.html :deep(img) {
  width: 100%;
  height: auto;
  border-radius: 12px;
}

.tags{
  font-size: 18px;
  color: var(--sky);
  font-family: var(--base);
  margin-bottom: 24px;
}

@media screen and (max-width: 1024px) {
  .grid {
    display: flex;
    flex-direction: column;
  }

  .stick {
    position: static;
  }

  .title {
    font-size: 32px;
    line-height: 120%;
  }

  .img img {
    height: 220px;
  }
}
</style>
