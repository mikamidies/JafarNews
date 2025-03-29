<template>
  <div class="master">
    <div class="container">
      <div class="grid">
        <div class="left">
          <HomeBooks class="inner" :books="books" />
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
import HomeBooks from "@/components/HomePage/HomeBooks.vue";
import HomeOthers from "@/components/HomePage/HomeOthers.vue";

import postsApi from "@/api/posts";
import booksApi from "@/api/books";

export default {
  components: {
    HomeBooks,
    HomeOthers,
  },

  async asyncData({ $axios, query, i18n }) {
    const posts = await postsApi.getNews($axios, {
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

    return {
      posts,
      books,
      shuffledPosts
    };
  },
};
</script>

<style scoped>
.inner {
  padding-top: 0;
  margin-top: 0;
  border-top: 0;
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
