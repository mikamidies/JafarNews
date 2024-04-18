<template>
  <div class="wrapper">
    <NuxtLink to="/videos/_slug">
      <div class="left">
        <iframe
          :src="video.video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div class="right">
        <p class="name">
          {{ video.title }}
        </p>

        <div class="info">
          <div class="views">
            <ViewIcon />
            <p>{{ video.views }}</p>
          </div>
          <div class="date">
            <DateIcon />
            <p>{{ video.created_at }}</p>
          </div>
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

  props: ["video"],
};
</script>

<style scoped>
.wrapper {
  border-bottom: 1px solid var(--regular);
}

.wrapper a {
  padding: 12px 0;
  display: block;
  display: grid;
  gap: 24px;
  grid-template-columns: 3fr 7fr;
}

.info {
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: flex-end;
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

.name {
  font-size: 20px;
  max-width: 90%;
}

iframe {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  pointer-events: none;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media screen and (max-width: 1024px) {
  .wrapper a {
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
  }

  .name {
    margin-bottom: 12px;
  }

  iframe {
    height: 160px;
  }
}
</style>
