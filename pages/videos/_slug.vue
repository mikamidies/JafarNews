<template>
  <div class="master">
    <div class="container">
      <div class="grid">
        <div class="left">
          <div class="back">
            <NuxtLink :to="localePath(`/videos`)">
              <BackIcon />
              {{ $store.state.translations["main.all_videos"] }}
            </NuxtLink>
          </div>
          <h1 class="title">{{ video.title }}</h1>
          <div class="img">
            <iframe
              :src="getEmbedUrl(video.youtube_url)"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="tags">
            {{ video.tags }}
          </div>
          <div class="html" v-html="video.text"></div>
        </div>
        <div class="right">
          <div class="stick">
            <HomeOthers class="inner" :posts="video.other_news" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeOthers from "@/components/InnerOthers/VideoOthers.vue";
import BackIcon from "~/components/SvgIcons/BackIcon.vue";

import videosApi from "@/api/videos";

export default {
  components: {
    HomeOthers,
    BackIcon,
  },

  async asyncData({ $axios, params, query, i18n }) {
    const video = await videosApi.getVideo(params.slug, $axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    });

    return {
      video,
    };
  },

  methods: {
    getEmbedUrl(url) {
      if (!url) return ""; // Проверяем, что URL не пустой
      const videoId = url.includes("youtu.be/")
        ? url.split("youtu.be/")[1].split("?")[0] // Для коротких ссылок
        : url.split("watch?v=")[1]?.split("&")[0]; // Для длинных ссылок
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },
};
</script>

<style scoped>
.inner {
  padding-top: 0;
  margin-top: 0;
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

.img iframe {
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

  .img iframe {
    height: 220px;
  }
}
</style>
