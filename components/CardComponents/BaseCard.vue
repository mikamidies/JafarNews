<template>
  <div class="wrapper">
    <NuxtLink :to="localePath(`/posts/${item.slug}`)">
      <div class="img">
        <img :src="item.image ? item.image : '/default-image.jpg'" alt="" />
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
  components: {
    ViewIcon,
    DateIcon,
  },

  props: ["item"],
};
</script>

<style scoped>
.img img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}

.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
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
  letter-spacing: 2px;
  line-height: 110%;
  margin-bottom: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.subtitle {
  font-size: 12px;
  font-family: var(--base);
  opacity: 0.8;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
    margin-bottom: 12px;
  }

  .bottom {
    margin: 12px 0 0 0;
  }
}
</style>
