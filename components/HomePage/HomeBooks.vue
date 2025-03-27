<template>
  <div class="wrap">
    <div class="header">
      <h4 class="section__title">
        {{ $store.state.translations["main.books"] }}
      </h4>

      <NuxtLink :to="localePath(`/books`)">
        {{ $store.state.translations["main.see_all"] }}
        <UpArrow />
      </NuxtLink>
    </div>
    <div class="items">
      <BookCard v-for="item in books" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import BookCard from "../CardComponents/BookCard.vue";
import UpArrow from "../SvgIcons/UpArrow.vue";

export default {
  props: ["books"],

  components: {
    BookCard,
    UpArrow,
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

.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

@media screen and (max-width: 1024px) {
  .items {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
