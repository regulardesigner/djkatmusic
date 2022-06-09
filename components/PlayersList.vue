<template>
  <section class="players-list">
    <div v-for="audio in audioList" :key="audio.id" class="audio-player-skin">
      <audio-player :song="audio" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      audioList: [
        { id: 0, title: "ada-ya", isPlaying: false},
        { id: 1, title: "loop", isPlaying: false},
        { id: 2, title: "street-lobsters-ansstaplitouilles", isPlaying: false},
        { id: 3, title: "street-lobsters-rap", isPlaying: false},
        { id: 4, title: "street-lobsters", isPlaying: false},
        { id: 5, title: "synthesizer", isPlaying: false},
      ],
    }
  },
}
</script>

<style>
.players-list {
  margin: 0 1rem;
}
</style>
