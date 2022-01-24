<template>
  <section class="music">
    <audio v-for="audio in audioList" :key="audio.id" class="player" controls controlsList="nodownload">
      <source :src="require(`@/assets/audio/${audio.title}.mp3`).default" type="audio/mpeg">
      <source :src="require(`@/assets/audio/${audio.title}.ogg`).default" type="audio/ogg">
      <!-- fallback for non supporting browsers goes here -->
      <p>Your browser does not support HTML5 audio, but you can still.</p>
    </audio>
  </section>
</template>

<script>
export default {
  data() {
    return {
      audioList: [
        { id: 0, title: "ada-ya"},
        { id: 1, title: "loop"},
        { id: 2, title: "street-lobsters-ansstaplitouilles"},
        { id: 3, title: "street-lobsters-rap"},
        { id: 4, title: "street-lobsters"},
        { id: 5, title: "synthesizer"},
      ],
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

.player {
  margin-top: 1rem;
  width: 100%;
}
</style>
