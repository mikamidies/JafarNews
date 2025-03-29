<template>
  <div class="site">
    <transition name="home">
      <WholeLoader v-if="loading" />
    </transition>

    <DesktopHeader :info="info" />
    <main>
      <nuxt />
    </main>
    <div class="banners">
      <div class="container">
        <TelegramBanner :info="info" />
        <YoutubeBanner :info="info" />
      </div>
    </div>
    <DesktopFooter :info="info" />
  </div>
</template>

<script>
import DesktopHeader from "~/components/DesktopHeader.vue";
import DesktopFooter from "@/components/DesktopFooter.vue";

import translationsApi from "@/api/translations";
import infoApi from "@/api/info";
import YoutubeBanner from "~/components/CardComponents/YoutubeBanner.vue";
import TelegramBanner from "~/components/CardComponents/TelegramBanner.vue";

export default {
  data() {
    return {
      translations: [],
      info: "",
      loading: true,
    };
  },

  head() {
    return {
      title: this.info.title || "Заголовок по умолчанию",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.info.description || "",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.info.subtitle || "",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: this.info.logo_first || "/favicon.png",
        },
      ],
    };
  },

  transition: "home",

  async mounted() {
    try {
      const translations = await translationsApi.getTranslations(this.$axios, {
        headers: {
          Language: this.$i18n.locale,
        },
      });

      await this.$store.commit("getTranslations", translations.data);
    } catch (error) {
    } finally {
      this.loading = false; 
    }

    this.$router.beforeEach((to, from, next) => {
      this.loading = true; 
      next(); 
    });

    this.$router.afterEach(() => {
      setTimeout(() => {
        this.loading = false;
      }, 500); 
    });
  },

  async fetch() {
    const info = await infoApi.getInfo(this.$axios);

    this.info = info;
  },

  computed: {
    currentLang() {
      return this.$i18n.locale;
    },
  },

  watch: {
    async currentLang() {
      const translations = await translationsApi.getTranslations(this.$axios, {
        headers: {
          Language: this.$i18n.locale,
        },
      });

      await this.$store.commit("getTranslations", translations.data);
    },
  },

  components: {
    DesktopHeader,
    DesktopFooter,
    TelegramBanner,
    YoutubeBanner,
  },
};
</script>

<style scoped>
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1;
}

.trick {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.home-enter-active {
  transition: none; /* Убираем плавный переход при входе */
}

.home-leave-active {
  transition: opacity 0.5s; /* Плавный переход при исчезновении */
}

.home-enter {
  opacity: 1; /* Лоадер появляется мгновенно */
}

.home-leave-active {
  opacity: 0; /* Лоадер исчезает плавно */
}

.banners .container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 80px;
}

@media screen and (max-width: 1024px) {
  main {
    padding-top: 116px;
  }
  .banners .container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
</style>
