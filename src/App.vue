<template>
  <AppLayoutMain />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppLayoutMain from '@/layouts/AppLayoutMain.vue';

const MIN_KEYBOARD_HEIGHT = 200;

export default defineComponent({
  name: 'App',
  components: {
    AppLayoutMain,
  },
  mounted() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
    };

    let previousWindowHeight = 0;
    const scrollTop = (evt) => {
      if (
        evt.currentTarget.height - MIN_KEYBOARD_HEIGHT >
        previousWindowHeight
      ) {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
      previousWindowHeight = evt.currentTarget.height;
    };

    window.addEventListener('resize', (evt) => {
      scrollTop(evt);
      documentHeight();
    });
    window.visualViewport.addEventListener('resize', (evt) => {
      scrollTop(evt);
      documentHeight();
    });
    documentHeight();
  },
});
</script>

<style lang="scss">
@import 'src/assets/scss/main';
</style>
