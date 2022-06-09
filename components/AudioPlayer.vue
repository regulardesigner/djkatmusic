<template>
  <section :style="progress" class="music-player">
    <button class="play-icon" :class="{ playing: isPlaying }" @click="handlePlayButton()">play</button>
    <div class="controls">
      <div class="controls-time" />
    </div>
    <audio ref="audioPlayer" class="html-player" controls controlsList="nodownload">
      <source :src="require(`@/assets/audio/${song.title}.mp3`).default" type="audio/mpeg">
      <source :src="require(`@/assets/audio/${song.title}.ogg`).default" type="audio/ogg">
      <!-- fallback for non supporting browsers goes here -->
      <p>Your browser does not support HTML5 audio, but you can still.</p>
    </audio>
  </section>
</template>

<script>
export default {

  props: {
    song: { type: Object, required: true }
  },

  data() {
    return {
      isPlaying: false,
      song_current_time : 0,
      song_duration: 0,

    }
  },

  computed: {
    audioPlayer() {
      return this.$refs.audioPlayer
    },

    progress() {
      const time = (this.song_current_time / this.song_duration) * 100 || 0
      return {
        '--time': `${time}%`
      }
    },
  },

  mounted() {
    this.audioPlayer.ontimeupdate = _event => {
      this.song_current_time = this.audioPlayer.currentTime
      this.song_duration = this.audioPlayer.duration
    }
  },

  methods: {
    handlePlayButton() {
      if (this.isPlaying) {
        this.isPlaying = false
        this.audioPlayer.pause()
      } else {
        this.isPlaying = true
        this.audioPlayer.play()
      }
    }
  }
}
</script>

<style>
.music {
  padding-top: 2rem;
  max-width: 50rem;
  margin: 0 auto;
}

.html-player {
  display: none;
  margin-top: 1rem;
  width: 100%;
}

.music-player {
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 1rem;
  border-radius: 3rem;
  padding: 0.4rem 0.9rem 0.4rem 0.4rem;
}

.play-icon {
  border: 1px solid black;
  border-radius: 5rem;
  background-image: url('~/assets/images/play-button.png');
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: 55% center;
  text-indent: -9999px;
  width: 4.4rem;
  height: 4.4rem;
  padding: 1rem;
  margin-right: 0.5rem;
}

.playing {
  background-color: #ffe5e3;
  background-image: url('~/assets/images/pause-button.png');
  background-position: center center;
}

.controls {
  width: 100%;
  height: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
}

.controls-time {
  transition: all ease 450ms;
  width: calc(var(--time) - 0.2rem);
  height: 0.3rem;
  border: 0.1rem solid white;
  border-radius: 0.3rem;
  background-color: lightgray;
}

</style>
