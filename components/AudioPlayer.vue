<template>
  <section class="music">
    <audio class="player" controls>
      <source :src="require('@/assets/audio/ada-ya.mp3').default" type="audio/mpeg">
      <source :src="require('@/assets/audio/ada-ya.ogg').default" type="audio/ogg">
      <!-- fallback for non supporting browsers goes here -->
      <p>Your browser does not support HTML5 audio, but you can still.</p>
    </audio>
  </section>
</template>

<script>
export default {
  // data() {
  //   return {
  //     audioList: {
  //       0:
  //     }
  //   }
  // }
}
</script>

<style>
.music {
  padding-top: 4rem;
  max-width: 50rem;
  margin: 0 auto;
}

.player {
  width: 100%;
}
</style>
