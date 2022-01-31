<template>
  <ul class="navigation">
    <li v-for="item in nav_urls" :key="item" class="item">
      <a class="link paytone" target="_blank" :href="item.url">
        <span class="icon" :class="item.class" />
        {{ item.name }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      nav_urls: [
        { name: 'Soundcloud' , url: 'https://soundcloud.com/dj_kaat', class: 'icon-soundcloud' },
        { name: 'Instagram' , url: 'https://www.instagram.com/dj_kat909', class: 'icon-instagram' },
        { name: 'Twitch' , url: 'https://m.twitch.tv/dj_kat_twitch', class: 'icon-twitch' },
        { name: 'Youtube' , url: 'https://www.youtube.com/channel/UCJyVE0O-lPD864lBvZElbHg', class: 'icon-youtube' }
      ]
    }
  }
}
</script>

<style>
.navigation {
  padding-top: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
}

.item {
  display: inline-block;
  margin-right: 1.2rem;
}

.item:last-child {
  margin-right: 0;
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.4rem 2rem 0.4rem 1rem;
  border: 0.1rem solid #9696de;
  background-color: #ffe5e3;
  border-radius: 4rem;
  text-decoration: none;
  color: #6868b6;
  font-size: 1.2rem;
  text-transform: uppercase;
  transition: background-color 250ms ease;
}

.link:hover {
  background-color: #fff0f0;
}

.icon {
  display: inline-block;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  margin: 0.4rem;
  width: 2rem;
  height: 2rem;
}

.icon-soundcloud {
  background-image: url('~/assets/images/orange_transparent_64-94fc761.png');
}

.icon-instagram {
  background-image: url('~/assets/images/Instagram_Glyph_Gradient_RGB.png');
}

.icon-twitch {
  background-image: url('~/assets/images/TwitchGlitchBlackOps.png');
  }

.icon-youtube {
  background-image: url('~/assets/images/youtube_logo.png');
}

@media (max-width: 576px) {
  .navigation {
    flex-direction: column;
  }

  .item {
    margin-left: 1.2rem;
    margin-right: 1.2rem;
    margin-bottom: 1rem;
  }

  .item:last-child {
    margin-right: 1.2rem;
  }
}
</style>
