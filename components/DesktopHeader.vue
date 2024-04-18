<template>
  <div class="wrap" id="mobile">
    <div class="top">
      <div class="container">
        <p class="quote">
          {{ $store.state.translations["maqol.maqol"] }}
        </p>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="left">
          <NuxtLink class="brand" :to="localePath(`/`)">
            <LangIcon />
            <p>Ja'far News</p>
          </NuxtLink>
        </div>
        <div class="mid" :class="{ show: menuHandle }">
          <ul class="links">
            <li>
              <NuxtLink :to="localePath(`/`)"
                >{{ $store.state.translations["main.main"] }}
                <ChevronRight class="hidden" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath(`/popular`)"
                >{{ $store.state.translations["main.popular"] }}
                <ChevronRight class="hidden" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath(`/posts`)"
                >{{ $store.state.translations["main.news"] }}
                <ChevronRight class="hidden" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath(`/videos`)"
                >{{ $store.state.translations["main.videos"] }}
                <ChevronRight class="hidden" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath(`/books`)"
                >{{ $store.state.translations["main.books"] }}
                <ChevronRight class="hidden" />
              </NuxtLink>
            </li>

            <li class="hidden">
              <NuxtLink :to="localePath(`/search`)"
                >{{ $store.state.translations["main.search"] }}
                <SearchIcon />
              </NuxtLink>
            </li>
          </ul>

          <div class="hidden">
            <div class="locales">
              <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
              <NuxtLink :to="switchLocalePath('ru')">Русский</NuxtLink>
              <NuxtLink :to="switchLocalePath('uz')">O'zbekcha</NuxtLink>
              <NuxtLink :to="switchLocalePath('ar')">العربية</NuxtLink>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="langs">
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item key="1">
                  <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
                </a-menu-item>
                <a-menu-item key="2">
                  <NuxtLink :to="switchLocalePath('ru')">Русский</NuxtLink>
                </a-menu-item>
                <a-menu-item key="3">
                  <NuxtLink :to="switchLocalePath('uz')">O'zbekcha</NuxtLink>
                </a-menu-item>
                <a-menu-item key="4">
                  <NuxtLink :to="switchLocalePath('ar')">العربية</NuxtLink>
                </a-menu-item>
              </a-menu>
              <a-button style="margin-left: 8px">
                <LangIcon />
                {{ $store.state.translations["main.lang"] }}
              </a-button>
            </a-dropdown>
          </div>
          <div class="search">
            <NuxtLink :to="localePath('/search')">
              <SearchIcon />
              {{ $store.state.translations["main.search"] }}
            </NuxtLink>
          </div>

          <div
            class="burger"
            @click="menuHandle = !menuHandle"
            :class="{ x: menuHandle == true }"
          >
            <div class="stick"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchIcon from "@/components/SvgIcons/SearchIcon.vue";
import LangIcon from "@/components/SvgIcons/LangIcon.vue";
import ChevronRight from "@/components/SvgIcons/ChevronRight.vue";

export default {
  components: {
    SearchIcon,
    LangIcon,
    ChevronRight,
  },

  data() {
    return {
      menuHandle: false,
    };
  },

  watch: {
    $route() {
      this.menuHandle = false;
    },
  },

  mounted() {
    function scrollHeader() {
      const navbar = document.getElementById("mobile");
      if (this.scrollY >= 50) {
        navbar.classList.add("scroll");
      } else {
        navbar.classList.remove("scroll");
      }
    }
    window.addEventListener("scroll", scrollHeader);
  },
};
</script>

<style scoped>
.wrap {
  position: relative;
}

.brand {
  display: flex;
  align-items: center;
  gap: 16px;
}

.brand svg {
  width: 64px;
  height: 64px;
}

.brand :deep(path) {
  fill: var(--golden);
}

.brand img {
  width: 72px;
  height: auto;
  object-fit: contain;
}

.brand p {
  font-size: 28px;
  font-weight: 500;
  color: #f2c663;
}

.top {
  background: var(--dark-3);
  padding: 12px 0;
  transition: 0.4s;
}

.quote {
  font-family: var(--arabic);
  letter-spacing: 2px;
  font-size: 20px;
  text-align: center;
}

.mid {
  padding: 12px;
}

.links {
  display: flex;
  align-items: center;
  gap: 40px;
}

.bottom {
  padding: 16px 0;
  border-bottom: 1px solid var(--dark-2);
  transition: 0.4s;
}

.bottom .container {
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 6fr 2fr;
}

.mid {
  display: flex;
  justify-content: center;
}

.right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
}

.links a {
  font-family: var(--base);
  font-size: 18px;
  font-weight: 500;
  color: white;
}

.links a:hover {
  color: var(--golden);
}

.right button,
.right a {
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--base);
  font-size: 18px;
  font-weight: 500;
}

.nuxt-link-exact-active {
  color: var(--golden) !important;
}

.wrap :deep(.ant-btn) {
  background: transparent;
  color: white;
  border: 0;
  padding: 0;
  margin: 0;
}

.hidden {
  display: none;
}

@media screen and (max-width: 1024px) {
  .wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }

  .bottom {
    background: var(--dark-2);
  }

  .bottom .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .scroll {
    transform: translateY(-48px);
  }

  .scroll .bottom {
    padding: 12px 0;
    box-shadow: 0 0 10px 0 var(--dark-4);
  }

  .quote {
    font-size: 16px;
  }

  .langs,
  .search {
    display: none;
  }

  .brand {
    gap: 8px;
  }

  .brand img {
    width: 56px;
  }

  .brand p {
    font-size: 18px;
  }

  .stick {
    width: 30px;
    height: 2px;
    background: #1d899e;
    position: relative;
    transition: 0.3s;
  }

  .stick::after {
    width: 30px;
    height: 2px;
    background: #1d899e;
    position: absolute;
    top: 10px;
    left: 0;
    content: "";
    transition: 0.3s;
  }

  .stick::before {
    width: 30px;
    height: 2px;
    background: #1d899e;
    position: absolute;
    top: -10px;
    left: 0;
    content: "";
  }

  .x .stick {
    transform: rotate(45deg);
  }

  .x .stick::after {
    transform: rotate(90deg);
    top: 0;
  }

  .x .stick::before {
    display: none;
  }

  .bottom {
    position: relative;
  }

  .mid {
    position: fixed;
    top: 136px;
    transition: 0.4s;
    left: 0;
    transform: translateX(-100%);
    background: var(--dark-3);
    width: 100%;
    height: 100vh;
    padding: 24px 16px 44px 16px;
    justify-content: flex-start;
    flex-direction: column;
    gap: 24px;
    z-index: 1000;
  }

  .mid.show {
    transform: translateX(0);
  }

  .scroll .mid {
    top: 128px;
  }

  .links {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 0px;
  }

  .wrap {
    transition: 0.4s;
  }

  .hidden {
    display: flex;
  }

  .hidden a {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .links a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 0;
  }

  .links li:first-child a {
    padding-top: 0;
  }

  li {
    width: 100%;
  }

  .links a .hidden {
    width: 20px;
    display: flex;
    justify-content: center;
  }

  .locales {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: var(--dark-2);
    border-radius: 12px;
    padding: 4px;
  }

  .locales a {
    width: 100%;
    padding: 12px;
    font-family: var(--base);
    color: white;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    transition: 0.3s;
    font-size: 18px;
  }

  .locales .nuxt-link-exact-active {
    background: var(--regular);
  }
}
</style>
