<template>
  <div class="wrap">
    <div class="left">
      <h2 class="youtube-banner__title">Subscribe to YouTube</h2>
      <p class="youtube-banner__description">
        Watch the latest videos and tutorials.
      </p>
      <a :href="info.youtube" target="_blank" class="youtube-banner__button"
        >Subscribe Now</a
      >
    </div>
    <div class="right">
      <img src="@/assets/img/logo/toutube.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "YoutubeBanner",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #bf2626;
  border-radius: 12px;
}
img {
  width: 132px;
  height: 132px;
  object-fit: contain;
  transform: scale(1.5) translateX(-32px);
}
.right {
  display: flex;
  align-items: center;
}
.youtube-banner__button {
  padding: 12px 32px;
  background-color: #fff;
  color: #bf2626;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  display: inline-flex;
  font-family: var(--base);
}
.youtube-banner__title {
  font-family: var(--base);
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 4px;
}
.youtube-banner__description {
  font-family: var(--base);
  margin-bottom: 12px;
}
@media screen and (max-width: 1024px) {
  .youtube-banner__description {
    display: none;
  }
  .wrap {
    padding: 12px 16px;
  }
  .youtube-banner__title {
    font-size: 18px;
  }
  .youtube-banner__button {
    padding: 4px 16px;
  }
  img {
    width: 80px;
    height: 80px;
    transform: none;
  }
}
</style>
