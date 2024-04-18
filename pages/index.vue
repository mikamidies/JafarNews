<template>
  <div class="master">
    <div class="container">
      <div class="grid">
        <div class="left">
          <HomePopular :posts="postsPopular" />
          <HomePosts
            :title="$store.state.translations['main.news']"
            :posts="posts"
          />
          <HomeVideos :videos="videos" />
          <HomeBooks :books="books" />
        </div>
        <div class="right">
          <div class="stick">
            <HomeAudio :audios="audios" />
            <HomeOthers :posts="posts" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomePopular from "@/components/HomePage/HomePopular";
import HomePosts from "@/components/HomePage/HomePosts.vue";
import HomeVideos from "@/components/HomePage/HomeVideos.vue";
import HomeBooks from "@/components/HomePage/HomeBooks.vue";
import HomeAudio from "@/components/HomePage/HomeAudio.vue";
import HomeOthers from "@/components/HomePage/HomeOthers.vue";

import postsApi from "@/api/posts";
import videosApi from "@/api/videos";
import audiosApi from "@/api/audios";
import booksApi from "@/api/books";

export default {
  components: {
    HomePopular,
    HomePosts,
    HomeVideos,
    HomeBooks,
    HomeAudio,
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
    const audios = await audiosApi.getAudios($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    });
    const books = await booksApi.getBooks($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    });

    const postsPopular = posts?.filter((item) => item.last);

    return {
      posts,
      videos,
      audios,
      books,
      postsPopular,
    };
  },
};
</script>

<style scoped>
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
