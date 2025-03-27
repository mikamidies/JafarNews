<template>
  <div class="wrap">
    <h4 class="section__title">
      {{ $store.state.translations["main.audio"] }}
    </h4>
    <div class="cardo">
      <p class="sup">
        {{ $store.state.translations["main.now_playing"] }}
      </p>
      <p class="title">
        {{ audios[currentAudio]?.title }}
      </p>

      <audio-player
        ref="audioPlayer"
        :show-volume-button="false"
        :show-playback-rate="false"
        :audio-list="audios.map((audio) => audio.audio)"
        :before-play="handleBeforePlay"
        theme-color="#eebf57"
        :currentPlayIndex="currentAudio"
        :progress-end="($event) => processEnd($event)"
      />

      <div class="scroller">
        <div class="list">
          <div
            class="item"
            v-for="(item, index) in audios"
            :key="item.id"
            @click="currentAudioIndex(index)"
            :class="{ active: currentAudio == index }"
          >
            <div class="left">
              <h4 class="name">{{ item.title }}</h4>
              <p class="date">{{ item.created_at }}</p>
            </div>
            <div class="right">
              <button>
                <PlayIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayIcon from "../SvgIcons/PlayIcon.vue";

export default {
  components: { PlayIcon },

  props: ["audios"],

  data() {
    return {
      currentAudioName: "",
      currentAudio: 0,
    };
  },

  methods: {
    handleBeforePlay(next) {
      this.currentAudio = this.$refs.audioPlayer.currentPlayIndex;
      this.currentAudioName = this.audios[this.currentAudio].name;
      next();
    },

    async currentAudioIndex(index) {
      this.$refs.audioPlayer.pause();
      this.currentAudio = index;
      this.$refs.audioPlayer.currentPlayIndex = await index;
      setTimeout(() => {
        this.$refs.audioPlayer.play();
      }, 200);
    },

    processEnd(e) {
      this.currentAudio = this.$refs.audioPlayer.currentPlayIndex;
    },
  },
};
</script>

<style scoped>
.cardo {
  margin-top: 24px;
  padding: 24px;
  background: var(--dark-3);
  border-radius: 8px;
}

.scroller {
  min-height: 300px;
  overflow: auto;
  margin-right: -12px;
  padding-right: 8px;
}

.list {
  padding: 12px 0;
  height: 320px;
}

.item {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--light);
}

.item.active .name {
  color: var(--golden);
}

.item:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.name {
  font-size: 20px;
  margin-bottom: 2px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.html {
  opacity: 0.8;
  font-size: 14px;
  font-family: var(--base);
}

.date {
  margin-top: 4px;
  font-size: 12px;
  opacity: 0.8;
}

:deep(.audio__play-start),
:deep(.audio__play-prev),
:deep(.audio__play-next),
:deep(.audio__play-icon),
:deep(.audio__play-rate) {
  color: var(--golden) !important;
}

:deep(.audio__progress-point) {
  background-color: var(--golden) !important;
  box-shadow: #b97700 0px 0px 6px 0px !important;
}

:deep(.audio__progress-wrap) {
  background: var(--light-4) !important;
}

.title {
  font-size: 24px;
  margin-bottom: 16px;
  text-align: center;
}

.sup {
  margin-bottom: 4px;
  opacity: 0.7;
  text-align: center;
}
</style>
