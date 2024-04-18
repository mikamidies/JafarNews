<template>
  <div class="wrap">
    <div class="top">
      <div class="container">
        <div class="left">
          <NuxtLink class="brand" :to="localePath(`/`)">
            <LangIcon />
            <p>Ja'far News</p>
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
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <p class="name">{{ $store.state.translations["main.time"] }}</p>
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
}
</style>
