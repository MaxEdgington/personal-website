


<template>
    <div class="medium-post-widget">
        <div class='sk-ww-medium-publication-feed' data-embed-id='240315'></div>
    </div>
</template>

<script lang ="ts">
export default {
    name: 'MediumPostWidget',
    mounted() {
        const script = document.createElement('script');
        script.src = 'https://widgets.sociablekit.com/medium-publication-feed/widget.js';
        script.async = true;
        document.body.appendChild(script);
    }
};
</script>