<template>
  <ul class="navigation">
    <li class="item">
      <a class="link paytone" target="_blank" href="https://soundcloud.com/dj_kaat">
        <span class="icon-soundcloud" />Soundcloud
      </a>
    </li>
    <li class="item">
      <a class="link paytone" target="_blank" href="https://www.instagram.com/dj_kat909/">
        <span class="icon-instagram" />Instagram
      </a>
    </li>
    <li class="item">
      <a class="link paytone" target="_blank" href="https://m.twitch.tv/dj_kat_twitch/">
        <span class="icon-twitch" />Twitch
      </a>
    </li>
  </ul>
</template>

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

.icon-soundcloud,
.icon-instagram,
.icon-twitch {
  display: inline-block;
  background-repeat: no-repeat;
  background-size: contain;
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
