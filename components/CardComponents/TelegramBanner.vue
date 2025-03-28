<template>
  <div class="wrap">
    <div class="left">
      <h2 class="telegram-banner__title">Join our Telegram</h2>
      <p class="telegram-banner__description">
        Stay updated with the latest news and discussions.
      </p>
      <a :href="info.telegram" target="_blank" class="telegram-banner__button"
        >Join Now</a
      >
    </div>
    <div class="right">
      <img src="@/assets/img/logo/telegram.webp" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TelegramBanner",
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="css">
.wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #24a0deaa;
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
.telegram-banner__button {
  padding: 12px 32px;
  background-color: #fff;
  color: #24a1de;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  display: inline-flex;
  font-family: var(--base);
}
.telegram-banner__title {
  font-family: var(--base);
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 4px;
}
.telegram-banner__description {
  font-family: var(--base);
  margin-bottom: 12px;
}
@media screen and (max-width: 1024px) {
  .telegram-banner__description {
    display: none;
  }
  .wrap {
    padding: 12px 16px;
  }
  .telegram-banner__title {
    font-size: 18px;
  }
  .telegram-banner__button {
    padding: 4px 16px;
  }
  img {
    width: 80px;
    height: 80px;
    transform: none;
  }
}
</style>
