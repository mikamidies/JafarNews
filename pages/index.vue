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
            <HomeOthers :posts="shuffledPosts" />
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
    const limit = 12;

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
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
    const shuffledPosts = shuffleArray([...posts]); // Создаём копию массива и перемешиваем

    const postsLimited = posts.slice(0, limit);
    const videosLimited = videos.slice(0, limit);
    const booksLimited = books.slice(0, limit);

    const postsPopular = posts.filter((item) => item.top);

    return {
      posts: postsLimited,
      shuffledPosts,
      videos: videosLimited,
      audios,
      books: booksLimited,
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
