<template>
  <main class="app-main">
    <div class="app-main__content">
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppLayoutMain',
});
</script>

<style lang="scss" scoped>
.app-main {
  height: 100vh;
  /* fallback for Js load */
  height: var(--doc-height);

  &__content {
    height: 100%;
  }
}
</style>
