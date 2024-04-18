<template>
  <div class="master">
    <div class="container">
      <div class="grid">
        <div class="left">
          <h4 class="section__title">
            {{ $store.state.translations["main.search"] }}
          </h4>

          <div class="body">
            <div class="searcher">
              <input
                @keyup.enter="handleSearch()"
                v-model="searcher"
                type="text"
                :placeholder="$store.state.translations[`main.input`]"
              />
              <SearchIcon />
            </div>

            <div
              class="results"
              v-if="
                search.news?.length > 0 ||
                search.video_news?.length > 0 ||
                search.video_lessons?.length > 0
              "
            >
              <div class="news section" v-if="search.news?.length > 0">
                <h4 class="par">
                  {{ $store.state.translations["main.news"] }}
                </h4>
                <SearchCard
                  v-for="post in search.news"
                  :key="post.id"
                  :post="post"
                />
              </div>

              <div class="videos section" v-if="search.video_news?.length > 0">
                <h4 class="par">
                  {{ $store.state.translations["main.videos"] }}
                </h4>
                <VideoSearchCard
                  v-for="video in search.video_news"
                  :key="video.id"
                  :video="video"
                />
              </div>

              <div
                class="books section"
                v-if="search.video_lessons?.length > 0"
              >
                <h4 class="par">
                  {{ $store.state.translations["main.books"] }}
                </h4>
                <BooksSearchCard
                  v-for="book in search.video_lessons"
                  :key="book.id"
                  :book="book"
                />
              </div>
            </div>

            <div v-else class="empty">
              <EmptyIcon />
              <p>
                {{ $store.state.translations["main.no_data"] }}
              </p>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="stick">
            <HomeOthers class="inner" :posts="posts" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeOthers from "@/components/HomePage/HomeOthers.vue";
import BackIcon from "~/components/SvgIcons/BackIcon.vue";
import SearchIcon from "@/components/SvgIcons/SearchIcon.vue";
import EmptyIcon from "@/components/SvgIcons/EmptyIcon.vue";
import SearchCard from "@/components/CardComponents/SearchCard.vue";
import VideoSearchCard from "@/components/CardComponents/VideoSearchCard.vue";
import BooksSearchCard from "@/components/CardComponents/BooksSearchCard.vue";

import searchApi from "@/api/search";
import postsApi from "@/api/posts";

export default {
  components: {
    HomeOthers,
    BackIcon,
    SearchIcon,
    EmptyIcon,
    SearchCard,
    VideoSearchCard,
    BooksSearchCard,
  },

  data() {
    return {
      search: {},
      searcher: "",
    };
  },

  async asyncData({ $axios, query, i18n, params }) {
    const posts = await postsApi.getNews($axios, {
      params: { search: params.id },
      ...query,
      headers: {
        language: i18n.locale,
      },
    });

    return {
      posts,
    };
  },

  async mounted() {
    const searchData = await searchApi.getSearch(this.$axios, {
      params: { ...this.$route.query },
      headers: {
        language: this.$i18n.locale,
      },
    });

    this.search = searchData.data;
  },

  methods: {
    async changeNews() {
      const searchData = await searchApi.getSearch(this.$axios, {
        params: { ...this.$route.query },
        headers: {
          language: this.$i18n.locale,
        },
      });

      console.log(searchData);

      this.search = searchData.data;
    },

    async handleSearch() {
      await this.$router.replace(
        this.localePath({ path: `/search/?search=${this.searcher}` })
      );

      this.changeNews();
    },
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
}

.img img {
  width: 100%;
  height: 520px;
  object-fit: cover;
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

.searcher {
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 24px;
  border-radius: 8px;
  background: var(--regular);
  font-size: 18px;
  font-family: var(--base);
}

.empty {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 24px;
}

.empty p {
  font-size: 18px;
  font-family: var(--base);
}

.results {
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section {
  background: var(--dark-3);
  border-radius: 16px;
  padding: 16px;
}

.par {
  font-size: 24px;
}

.section :deep(.wrapper:last-child) {
  border-bottom: 0;
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
