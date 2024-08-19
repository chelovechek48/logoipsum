<script setup>
import AppHeader from '@components/AppHeader.vue';
</script>

<template>
  <div class="flex flex-col h-dvh">
    <AppHeader />
    <router-view class="flex-1 bg-background" />
  </div>
</template>

<style lang="scss">
@import '@styles';

html {
  scrollbar-gutter: stable;
}
</style>
