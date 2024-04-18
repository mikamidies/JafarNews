<template>
  <div class="wrap">
    <div class="header">
      <h4 class="section__title">{{ title }}</h4>

      <NuxtLink :to="localePath(`/posts`)">
        {{ $store.state.translations["inner.see_all"] }}
        <UpArrow />
      </NuxtLink>
    </div>
    <div class="grid">
      <BaseCard v-for="item in posts" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import UpArrow from "../SvgIcons/UpArrow.vue";
import BaseCard from "@/components/CardComponents/BaseCard.vue";

export default {
  props: ["title", "posts"],

  components: {
    UpArrow,
    BaseCard,
  },
};
</script>

<style scoped>
.wrap {
  padding: 32px 0;
  border-top: 1px solid var(--regular);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.header a {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--base);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: var(--sky);
}

.header a :deep(path) {
  fill: var(--sky);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  row-gap: 24px;
}

@media screen and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
