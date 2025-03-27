<template>
  <div class="wrapper">
    <NuxtLink :to="localePath(`/videos/${item.slug}`)">
      <div class="iframe">
        <iframe
          :src="getEmbedUrl(item.youtube_url)"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div class="bottom">
        <div class="info">
          <div class="views">
            <ViewIcon />
            <p>{{ item.views }}</p>
          </div>
          <div class="date">
            <DateIcon />
            <p>{{ item.created_at }}</p>
          </div>
        </div>
        <div class="content">
          <h2 class="title">{{ item.title }}</h2>
          <p class="subtitle">
            {{ item.subtitle }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import ViewIcon from "../SvgIcons/ViewIcon.vue";
import DateIcon from "../SvgIcons/DateIcon.vue";

export default {
  props: ["item"],

  components: {
    ViewIcon,
    DateIcon,
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
.iframe iframe {
  width: 100%;
  height: 264px;
  border-radius: 16px;
  pointer-events: none;
}

.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.views,
.date {
  font-style: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.7;
  font-family: var(--base);
}

.bottom {
  margin: 12px;
}

.title {
  font-size: 24px;
  line-height: 120%;
  letter-spacing: 2px;
  margin: 8px 0;
}

.subtitle {
  font-size: 12px;
  font-family: var(--base);
  opacity: 0.8;
}

@media screen and (max-width: 1024px) {
  .title {
    font-size: 18px;
    line-height: 120%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 12px 0;
  }

  .bottom {
    margin: 12px 0 0 0;
  }

  .iframe iframe {
    height: 220px;
  }
}
</style>
