<template>
  <div class="site">
    <transition name="home">
      <WholeLoader v-if="loading" />
    </transition>
    <!-- <img src="@/assets/img/trick.jpg" alt="" class="trick" /> -->

    <DesktopHeader />
    <main>
      <nuxt />
    </main>
    <DesktopFooter />
  </div>
</template>

<script>
import DesktopHeader from "~/components/DesktopHeader.vue";
import DesktopFooter from "@/components/DesktopFooter.vue";

import translationsApi from "@/api/translations";

export default {
  data() {
    return {
      translations: [],
      loading: true,
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
    $route() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },

  components: {
    DesktopHeader,
    DesktopFooter,
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

.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}

.home-enter,
.home-leave-active {
  opacity: 0;
}

@media screen and (max-width: 1024px) {
  main {
    padding-top: 116px;
  }
}
</style>
