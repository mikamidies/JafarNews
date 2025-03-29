<template>
  <div class="master">
    <div class="container">
      <div class="grid">
        <div class="left">
          <HomeVideos class="inner" :videos="videos" />
        </div>
        <div class="right">
          <div class="stick">
            <HomeOthers :posts="shuffledPosts" class="inner" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeVideos from "@/components/HomePage/HomeVideos.vue";
import HomeOthers from "@/components/HomePage/HomeOthers.vue";

import postsApi from "@/api/posts";
import videosApi from "@/api/videos";

export default {
  components: {
    HomeVideos,
    HomeOthers,
  },

  async asyncData({ $axios, query, i18n }) {
    const posts = await postsApi.getNews($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    });
    const videos = await videosApi.getVideos($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    });

    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
    const shuffledPosts = shuffleArray([...posts]); // Создаём копию массива и перемешиваем

    return {
      posts,
      videos,
      shuffledPosts
    };
  },
};
</script>

<style scoped>
.inner {
  padding-top: 0;
  border-top: 0;
  margin: 0;
}

.inner :deep(.header a) {
  display: none;
}

.master {
  padding: 48px 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 32px;
  min-height: 60vh;
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

@media screen and (max-width: 1024px) {
  .grid {
    display: flex;
    flex-direction: column;
  }

  .stick {
    position: static;
  }
}
</style>
