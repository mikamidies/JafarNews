<template>
  <div class="master">
    <div class="container">
      <div class="grid">
        <div class="left">
          <div class="back">
            <NuxtLink :to="localePath(`/books`)">
              <BackIcon />
              {{ $store.state.translations["main.all_books"] }}
            </NuxtLink>
          </div>
          <h1 class="title">{{ book.title }}</h1>
          <div class="img">
            <img :src="book.image" alt="" />
          </div>
          <div class="html" v-html="book.text"></div>
          <a :href="book.book" target="_blank" download class="download">
            {{ $store.state.translations["main.download"] }}
            <DownloadIcon />
          </a>
        </div>
        <div class="right">
          <div class="stick">
            <HomeOthers class="inner" :posts="book.other_news" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeOthers from "@/components/InnerOthers/BookOthers.vue";
import BackIcon from "~/components/SvgIcons/BackIcon.vue";
import DownloadIcon from "@/components/SvgIcons/DownloadIcon.vue";

import booksApi from "@/api/books";

export default {
  components: {
    HomeOthers,
    BackIcon,
    DownloadIcon,
  },

  async asyncData({ $axios, params, query, i18n }) {
    const book = await booksApi.getBook(params.slug, $axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    });

    return {
      book,
    };
  },
};
</script>

<style scoped>
.inner {
  padding-top: 0;
  border-top: 0;
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
}

.img img {
  width: auto;
  height: 520px;
  object-fit: contain;
  border-radius: 12px;
  display: flex;
  margin-bottom: 24px;
}

.html p {
  font-size: 18px;
  color: white;
  font-family: var(--base);
  line-height: 150%;
  display: block;
  margin-bottom: 16px;
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

.download {
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--base);
  color: white;
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
}
</style>
