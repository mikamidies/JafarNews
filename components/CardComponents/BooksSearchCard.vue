<template>
  <div class="wrapper">
    <NuxtLink to="/books/_slug">
      <div class="left">
        <img :src="book.image" alt="" />
      </div>

      <div class="right">
        <p class="name">
          {{ book.title }}
        </p>

        <div class="info">
          <div class="views">
            <ViewIcon />
            <p>{{ book.views }}</p>
          </div>
          <div class="date">
            <DateIcon />
            <p>{{ book.created_at }}</p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import ViewIcon from "../SvgIcons/ViewIcon.vue";
import DateIcon from "../SvgIcons/DateIcon.vue";

export default {
  components: {
    ViewIcon,
    DateIcon,
  },

  props: ["book"],
};
</script>

<style scoped>
.wrapper {
  border-bottom: 1px solid var(--regular);
}

.wrapper a {
  padding: 12px 0;
  display: block;
  display: grid;
  gap: 24px;
  grid-template-columns: 3fr 7fr;
}

.info {
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: flex-end;
}

.views,
.date {
  font-style: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.7;
  font-family: var(--base);
}

.name {
  font-size: 20px;
  max-width: 90%;
}

img {
  width: 100%;
  height: 120px;
  object-fit: contain;
  border-radius: 8px;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media screen and (max-width: 1024px) {
  .wrapper a {
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
  }

  .name {
    margin-bottom: 12px;
  }

  img {
    height: 160px;
  }
}
</style>
