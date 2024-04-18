<template>
  <div class="wrapper">
    <NuxtLink :to="localePath(`/books/${item.slug}`)">
      <div class="img">
        <img :src="item.image" alt="" />
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
};
</script>

<style scoped>
.wrapper {
  background: var(--dark-3);
  border-radius: 8px;
  overflow: hidden;
  padding: 8px;
}

.img img {
  width: 100%;
  height: 220px;
  object-fit: contain;
}

.info {
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.views,
.date {
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0.7;
  font-family: var(--base);
}

.bottom {
  padding: 8px;
}

.title {
  font-size: 24px;
  letter-spacing: 2px;
  line-height: 100%;
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
    margin: 12px 0 0 0;
  }

  .bottom {
    margin: 0;
  }
}
</style>
