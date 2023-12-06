<script setup lang="ts">
import { RouterLink, RouterView} from 'vue-router'

import { onMounted } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

onMounted(() => {
   const backgroundAudio = document.getElementById('background-audio');

  if (backgroundAudio) {
    backgroundAudio.play().catch(error => {
      console.error('Audio playback failed:', error);
      // Handle the error, maybe show a play button instead
    });
  } else {
    console.error('Audio element not found');
  }
});

</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
   <audio id="background-audio" src="/bandicam-2023-12-05-18-50-24-212_TJiZ7Mgy.mp3" preload="auto" style="display: none;" loop></audio>
  <RouterView />

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  border-bottom: 0.1rem solid;
  border-color: rgb(244, 159, 28);
  display: flex;
  justify-content: space-evenly;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* @media (min-width: 2024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>

