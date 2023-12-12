<script setup lang="ts">

import { onBeforeMount } from 'vue';

onBeforeMount(() => {
  console.log("Before component mounts");
  });
import { ref, onMounted } from 'vue';
import GetInTouch from './GetInTouch.vue'
import MediumPostWidget from './MediumPostWidget.vue'
import HeroImg from '@/assets/1604438705335.jpg'

console.log("Component script is running");


</script>

<template>
  <header>
    <section class="header-text">
      <h1>Hello! I'm Max Edgington [he/him]</h1>
      <h4>Full-stack web developer with a side of community development, marketing and project management</h4>
    </section>
  </header>

  <section class="who-max">
    <img :src="HeroImg" alt="Image of Max">
    <div>
      <h2>Who is Max?</h2>
      <p>Newly minted from Lighthouse Labs, I'm passionate about crafting websites that weave together form and function
        with fresh, clean code. Join me on this exciting path as I grow, create, and connect through technology.</p>
      <button class="custom-button">get in touch</button>
    </div>
  </section>

  <section class="selected-work">
   <h2>Selected Work</h2>
  <section class="work-row">
    <!-- Pair 1 -->
    <div class="work-item">
      <div class="image-box"> <!-- Image/GIF here --> </div>
      <div class="text-box">Description for item 1</div>
    </div>

    <!-- Pair 2 -->
    <div class="work-item">
      <div class="image-box"> <!-- Image/GIF here --> </div>
      <div class="text-box">Description for item 2</div>
    </div>

    <!-- Pair 3 -->
    <div class="work-item">
      <div class="image-box"> <!-- Image/GIF here --> </div>
      <div class="text-box">Description for item 3</div>
    </div>
  </section>
    <button class="custom-button">see more</button>

  </section>
  

  <section class="blog">
    <h2>Latest Blog Post</h2>
    <MediumPostWidget />
  </section>
  
  
  <GetInTouch />
</template>





<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  /* Fill the viewport height */
}

.header-text h1 {
  font-size: 3.5em;
  /* Larger font size for emphasis */
  margin-bottom: 0.5em;
}

.header-text h4 {
  font-size: 1.2em;
  color: #666;
}

.who-max,
.blog {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 5rem;
  margin-bottom: 10rem;
  gap: 2rem; /* Gap between image and text */
  padding: 2rem; /* Padding around the section */

  /* Consistent top margin for sections */
}

.who-max img,
.who-max div {
  flex: 1;
  max-width: 50%;
}

.who-max p {
  margin-bottom: 20px;
  max-width: 60%;
}

.who-max h2 {
  margin-bottom: 20px
}

.who-max img {
  display: block;
  max-width: 40%;
  height: auto;
  border-radius: 15px;
}


.selected-work {
  margin-bottom: 10rem;
  padding: 2rem;
}

.selected-work h2 {
  margin-bottom: 2rem;
}

.selected-work .custom-button {
  display: block; /* Make the button a block element */
  margin: 30px auto; /* Vertical margin and automatic horizontal margin for centering */
  padding: 10px 20px; /* Button padding */
}

.work-row {
  display: flex;
  justify-content: space-between; /* Adjusts the space between the items */
  gap: 20px; /* Adds space between items if they wrap */
}

.work-item {
  flex-grow: 1; /* Allows each item to grow and take up equal space */
  text-align: center; /* Centers text */
}

.image-box {
  height: 200px; /* Example height, adjust as needed */
  background-color: #ccc; /* Placeholder for image */
  margin-bottom: 10px; /* Space between image and text */
}

.text-box {
  /* Style for the text box */
  background-color: #eee; /* For visibility, can be changed */
  padding: 10px;
}


.custom-button {
  background-color: #7EB2DD;
  border: none;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {

  .who-max,
  .selected-work,
  .blog {
    flex-direction: column;
    text-align: center;
  }
}</style>