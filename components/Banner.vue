<template>
  <div class="gradient-header">
    <h1 class="welcome paytone">Welcome to the DJKAT's website</h1>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
}
</script>

<style>
.gradient-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26rem;
  text-align: center;
  color: white;
  background-image: url('~/assets/images/djkat_banner.jpg');
  background-position: center;
  background-size: cover;
}

.welcome {
  margin-top: 10rem;
  text-shadow: 0 0 10px #9898eb;
}
</style>
