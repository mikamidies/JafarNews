<template>
  <div class="master">
    <div class="container">
      <div class="grid">
        <div class="left">
          <HomePosts
            class="inner"
            :title="$store.state.translations[`main.popular`]"
            :posts="posts"
          />
        </div>
        <div class="right">
          <div class="stick">
            <HomeOthers class="inner" :posts="shuffledPosts" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomePosts from "~/components/HomePage/HomePosts.vue";
import HomeOthers from "@/components/HomePage/HomeOthers.vue";

import postsApi from "@/api/posts";

export default {
  components: {
    HomePosts,
    HomeOthers,
  },

  async asyncData({ $axios, query, i18n }) {
    const postsData = await postsApi.getNews($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    });

    const posts = postsData?.filter((item) => item.top);
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
    const shuffledPosts = shuffleArray([...posts]); // Создаём копию массива и перемешиваем

    return {
      posts,
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
