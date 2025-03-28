<template>
  <div class="wrap">
    <div class="top">
      <div class="container">
        <div class="left">
          <NuxtLink class="brand" :to="localePath(`/`)">
            <LangIcon />
            <p>{{ info.title }}</p>
          </NuxtLink>
        </div>
        <div class="right">
          <ul class="links">
            <li>
              <NuxtLink :to="localePath(`/`)">{{
                $store.state.translations["main.main"]
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath(`/popular`)">{{
                $store.state.translations["main.popular"]
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath(`/posts`)">{{
                $store.state.translations["main.news"]
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath(`/videos`)">{{
                $store.state.translations["main.videos"]
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath(`/books`)">{{
                $store.state.translations["main.books"]
              }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="container">
        <p class="sub">
          {{ $store.state.translations["main.footer-txt"] }}
        </p>
        <div class="socials">
          <a :href="info.instagram" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 64 64"
            >
              <path
                d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"
              ></path>
            </svg>
          </a>
          <a :href="info.telegram" target="_blank" rel="noopener noreferrer">
            <svg
              id="Layer_1"
              style="enable-background: new 0 0 100 100"
              version="1.1"
              viewBox="0 0 100 100"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5  c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2  c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9  c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2  c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6  c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1  c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1  c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z"
              />
            </svg>
          </a>
          <a :href="info.youtube" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 64 64"
            >
              <path
                d="M56.456,17.442c-0.339-1.44-1.421-2.595-2.866-3.053C49.761,13.174,41.454,12,32,12s-17.761,1.174-21.591,2.389 c-1.445,0.458-2.527,1.613-2.866,3.053C6.903,20.161,6,25.203,6,32c0,6.797,0.903,11.839,1.544,14.558 c0.339,1.44,1.421,2.595,2.866,3.053C14.239,50.826,22.546,52,32,52s17.761-1.174,21.591-2.389 c1.445-0.458,2.527-1.613,2.866-3.053C57.097,43.839,58,38.797,58,32C58,25.203,57.097,20.161,56.456,17.442z M27,40V24l14.857,8 L27,40z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <p class="name">
          {{ currentDate.getFullYear() }}
          {{ $store.state.translations["main.developer"] }}
        </p>
        <p class="rights">{{ $store.state.translations["main.rights"] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import LangIcon from "@/components/SvgIcons/LangIcon.vue";

export default {
  components: {
    LangIcon,
  },
  data() {
    return {
      currentDate: new Date(),
    };
  },
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.wrap {
  margin-top: 120px;
  background: var(--dark-3);
}

.top {
  padding: 48px 0;
}

.top .container {
  display: grid;
  align-items: center;
  grid-template-columns: 5fr 5fr;
}

.brand svg {
  width: 64px;
  height: 64px;
}

.brand :deep(path) {
  fill: var(--golden);
}

.bottom {
  padding: 16px 0;
  background: var(--dark-2);
}

.bottom .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bottom p {
  font-size: 18px;
  font-family: var(--base);
}

.brand {
  display: flex;
  align-items: center;
  gap: 16px;
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

.sub {
  font-size: 18px;
  font-family: var(--base);
}

.mid {
  padding-bottom: 48px;
}

.right {
  display: flex;
  justify-content: flex-end;
}

.links {
  display: flex;
  align-items: center;
  gap: 40px;
}

.links a {
  font-family: var(--base);
  font-size: 18px;
  font-weight: 500;
  color: white;
  white-space: nowrap;
}

.links a:hover {
  color: var(--golden);
}
.socials {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 24px;
}
.socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}
.mid .container {
  display: grid;
  align-items: center;
  grid-template-columns: 6fr 4fr;
}
.socials path {
  fill: var(--golden);
}
@media screen and (max-width: 1024px) {
  .wrap {
    margin-top: 32px;
  }

  .top .container {
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
  }

  .links {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .right {
    justify-content: flex-start;
  }

  .brand img {
    width: 56px;
  }

  .brand p {
    font-size: 18px;
  }

  .top {
    padding: 24px 0;
  }

  .sub,
  .bottom p {
    font-size: 14px;
  }

  .mid {
    padding-bottom: 24px;
  }

  .mid .container {
    grid-template-columns: 1fr;
  }
  .socials {
    justify-content: flex-start;
    margin-top: 32px;
  }
}
</style>
