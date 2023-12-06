<script setup lang="ts">
import AboutItem from './AboutItem.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
</script>

<template >
    <section class ="top-about-section"> 
    <AboutItem>

        <!-- Taking out Documentation Icon  -->
        <!-- <template #icon>
            <DocumentationIcon />
        </template> -->
        <template #heading>Documentation</template>

        Vue’s
        <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
        provides you with all information you need to get started.
    </AboutItem>
    </section>
    <section class = "bottom-about-section"> 
    <AboutItem>
        <!-- <template #icon>
            <ToolingIcon />
        </template> -->
        <template #heading>Tooling</template>

        This project is served and bundled with
        <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
        recommended IDE setup is
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
        you need to test your components and web pages, check out
        <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
        <a href="https://on.cypress.io/component" target="_blank" rel="noopener">Cypress Component Testing</a>.

        <br />

        More instructions are available in <code>README.md</code>.
    </AboutItem>
    </section>

    <section class = "bottom-about-section"> 
    <AboutItem>
        <!-- <template #icon>
            <EcosystemIcon />
        </template> -->
        <template #heading>Ecosystem</template>

        Get official tools and libraries for your project:
        <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
        <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
        <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
        <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
        you need more resources, we suggest paying
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
        a visit.
    </AboutItem>
    </section>
   
</template>


<style scoped>

.top-about-section {
    background-color: blue;
    
}


.bottom-about-section {
    background-color: rgba(0, 89, 255, 0.671);
    float: left;
    width: 50%;

}


/* i {
    display: flex;
    place-items: center;
    place-content: center;
    width: 32px;
    height: 32px;

    color: var(--color-text);
} */

h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
}


</style>


<!--  About content from View -->
<!-- <template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style> -->