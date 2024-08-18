<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import SvgTemplate from '@components/SvgTemplate.vue';
import spriteHeader from '@icons/sprite-header.svg';

const route = useRoute();

const list = ref();
const links = [
  { id: 'home', label: 'главная' },
  { id: 'blog', label: 'блог' },
];
</script>

<template>
  <header class="relative bg-black py-4 text-white">
    <div
      class="
        flex items-center
        gap-4 tablet:gap-20
        container
      "
    >
      <button
        class="
          tablet:hidden
          w-7 grid gap-1.5 flex-none
          bg-transparent
        "
        @click="list.classList.toggle('active')"
      >
        <span class="w-full h-0.5 bg-white rounded-md" />
        <span class="w-full h-0.5 bg-white bg-opacity-30 rounded-md" />
        <span class="w-full h-0.5 bg-white bg-opacity-30 rounded-md" />
      </button>
      <SvgTemplate
        icon-id="logo" viewBox="0 0 150 28" :sprite="spriteHeader"
        class="h-7"
      />
      <nav class="navigation" ref="list">
        <ul
          class="
            navigation__list
            text-base font-semibold capitalize
          "
        >
          <li v-for="link in links" :key="link.id" class="flex">
            <router-link
              :to="link.id"
              @click="list.classList.remove('active')"
              class="py-2 px-3.5 rounded-md"
              :class="route.name === link.id
                ? 'text-blue-primary bg-white bg-opacity-10'
                : 'text-white bg-black'"
            >
              {{ link.label }}
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="ml-auto flex items-center gap-3">
        <SvgTemplate
          icon-id="user" :sprite="spriteHeader"
          class="text-blue-gray-300 h-6 hidden mobile:block"
        />
        <div>
          <p class="text-white text-sm font-semibold">
            username
          </p>
          <p class="text-blue-gray-200 text-xs font-medium">
            ma***l@mail.ru
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.navigation {
  @media (max-width: calc(theme('screens.tablet') - 1px)) {
    z-index: 100;
    position: absolute;
    inset: 100% 0 auto 0;

    background-color: theme('colors.black');

    opacity: 0;
    visibility: hidden;
    &.active {
      opacity: 1;
      visibility: visible;
    }
  }

  &__list {
    display: flex;

    @media (min-width: theme('screens.tablet')) {
      gap: 1.25rem;
    }
    @media (max-width: calc(theme('screens.tablet') - 1px)) {
      gap: 0.75rem;
      padding: 0.75rem theme('container.padding');
    }
  }
}
</style>
