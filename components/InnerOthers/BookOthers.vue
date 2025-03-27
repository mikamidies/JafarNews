<template>
  <div class="wrap">
    <h4 class="section__title">
      {{ $store.state.translations["main.other_books"] }}
    </h4>
    <div class="list">
      <OtherCard v-for="item in posts" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import OtherCard from "@/components/CardComponents/BookOtherCard.vue";

export default {
  props: ["posts"],

  components: {
    OtherCard,
  },
};
</script>

<style scoped>
.wrap {
  padding: 32px 0;
  margin-top: 32px;
  border-top: 1px solid var(--regular);
}

.list {
  margin-top: 24px;
}

.wrap :deep(.wrapper):last-child {
  border-bottom: 0;
  padding-bottom: 0;
}
</style>
