<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import HeroImg from '@/assets/1604438705335.jpg'
</script>

<template>
  <section class = "hero-background">
  <header>
    <img :src="HeroImg" alt="Image of Max">
    <section class = "header-text"> 
      <h1>Hello! I'm Max Edgington.</h1>
      <h4> Embarking on a Journey in Web Development</h4>
    </section>
  </header> 


  <WelcomeItem>
    <template #heading>

    Newly minted from Lighthouse Labs, I'm passionate about crafting websites that weave together form and function with fresh, clean code. Join me on this exciting path as I grow, create, and connect through technology.
     </template>
  </WelcomeItem>
 
  </section>
</template>


<style scoped>

header {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px; /* Space between image and text */
  padding: 20px;
}


.header-text h4 {
  font-size: 1.2em; /* Adjust as needed */
  color: #666; /* Example color */
}

.header-text h1 {
  font-size: 2em; /* Adjust as needed */
  margin-bottom: 0.5em; /* Spacing between the h1 and h4 */
}


.top-about-section {
  background-color: blue;

}


.hero-background {
  margin-top: 2%;
  background-color: #FFFFFF;
  

}
img{
  width: 20%;
  float: Left;
  padding: 1%;
}


@media (max-width: 768px) {
  header {
    flex-direction: column;
  }
}

</style>