<template>
  <div class="wrap">
    <h4 class="section__title">
      {{ $store.state.translations["main.popular"] }}
    </h4>

    <div class="swiper topSwiper" ref="popularSwiper">
      <div class="swiper-wrapper">
        <div v-for="item in posts" :key="item.id" class="swiper-slide">
          <NuxtLink :to="localePath(`/posts/${item.slug}`)">
            <div class="img">
              <img :src="item.image" alt="" />
            </div>
            <div class="right">
              <div class="content">
                <div>
                  <h2 class="title">{{ item.title }}</h2>
                  <p class="sub" v-html="item.text"></p>
                </div>

                <div class="tags">
                  {{ item.tags }}
                </div>
              </div>

              <div class="info">
                <div class="views">
                  <ViewIcon />
                  <p>{{ item.views }}</p>
                </div>
                <div class="date">
                  <DateIcon />
                  <p>{{ item.created_at }}</p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="swiper bottomSwiper" ref="popularThumbs" thumbsSlider="">
      <div class="swiper-wrapper">
        <div v-for="thumb in posts" :key="thumb.id" class="swiper-slide">
          <div class="thumb__img">
            <img :src="thumb.image" alt="" />
          </div>
          <div class="thumb__content">
            <h4 class="thumb__title">{{ thumb.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";
import ViewIcon from "../SvgIcons/ViewIcon.vue";
import DateIcon from "../SvgIcons/DateIcon.vue";

export default {
  components: {
    ViewIcon,
    DateIcon,
  },

  props: ["posts"],

  mounted() {
    const swiper = new Swiper(this.$refs.popularThumbs, {
      slidesPerView: 2.5,
      spaceBetween: 8,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 8,
        },
      },
    });

    new Swiper(this.$refs.popularSwiper, {
      slidesPerView: 1,
      spaceBetween: 8,
      autoplay: {
        delay: 5000,
      },
      speed: 1000,
      thumbs: {
        swiper: swiper,
      },
      breakpoints: {
        1024: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
      },
    });
  },
};
</script>

<style scoped>
.wrap {
  padding: 0 0 32px 0;
}

.topSwiper .swiper-slide a {
  padding: 12px;
  background: var(--dark-3);
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 32px;
  border-radius: 8px;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 12px;
}

.tags{
  font-size: 18px;
  color: white;
}

.img img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 4px;
}

.title {
  font-family: var(--decor);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  margin-bottom: 12px;
  margin-top: -16px;
  letter-spacing: 2px;
}

.sub {
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  margin-bottom: 12px;
  font-family: var(--base);
  opacity: 0.7;
  display: -webkit-box; /* Используем flex-контейнер для ограничения строк */
  -webkit-line-clamp: 6; /* Ограничиваем текст до 6 строк */
  -webkit-box-orient: vertical; /* Устанавливаем вертикальную ориентацию */
  overflow: hidden; /* Скрываем текст, выходящий за пределы */
  text-overflow: ellipsis; /* Добавляем многоточие для обрезанного текста */
  font-size: 16px; /* Пример размера шрифта */
  line-height: 1.5;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 16px 16px 0;
}

.info {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
}

.views,
.date {
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.8;
}

.views p,
.date p {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.24px;
}

.views :deep(path),
.date :deep(path) {
  stroke: white;
}

.topSwiper {
  margin-bottom: 12px;
  border-radius: 8px;
}

.thumb__img img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 8px;
}

.thumb__title {
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
}

.section__title {
  margin-bottom: 24px;
}

@media screen and (max-width: 1024px) {
  .topSwiper .swiper-slide a {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }

  .img img {
    height: 220px;
  }

  .title {
    font-size: 20px;
    line-height: 120%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 48px;
  }

  .sub {
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .right {
    padding: 16px 0 8px 0;
  }

  .thumb__img {
    height: 80px;
  }

  .thumb__title {
    font-size: 14px;
    margin-top: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 48px;
  }
}
</style>
