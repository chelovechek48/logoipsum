<script setup>
import SvgTemplate from '@components/SvgTemplate.vue';

const emit = defineEmits(['toggleModal']);
defineProps({
  item: {
    type: Object,
    required: true,
  },
});

</script>

<template>
  <dialog>
    <section
      class="
        fixed top-0 left-0 w-full h-full
        flex flex-col items-center justify-start bg-black bg-opacity-50 overflow-y-auto
      "
    >
      <article class="flex items-center flex-1">
        <div
          class="
          flex flex-col gap-2.5
          bg-white rounded-xl p-3 m-3
        "
        >
          <header class="flex items-center justify-between">
            <span class="text-large font-semibold">
              {{ item.title }}
            </span>
            <button
              class="flex bg-transparent rounded-full p-1.5 -m-1.5" style="rotate: 45deg;"
              @click="emit('toggleModal', { open: false })"
            >
              <SvgTemplate
                icon-id="plus"
                class="w-4 h-4 text-blue-gray-300"
              />
            </button>
          </header>
          <div class="flex gap-2.5 text-small text-blue-gray-400 font-medium">
            <div>
              {{ item.date }}
            </div>
            <div>
              {{ item.time }}
            </div>
            <div>
              {{ item.comments }} комментарий/ев
            </div>
          </div>
          <img
            class="rounded-xl object-cover object-center"
            src="@images/image.jpg"
            alt=""
          >
          <p class="text-normal">
            {{ item.description }}
          </p>
          <ul class="flex gap-2.5 text-sm">
            <li
              v-for="category in item.categories"
              :key="category"
              class="
              text-blue-primary
              bg-blue-gray-100
              capitalize
              rounded-3xl
              px-3 py-1.5
            "
            >
              {{ category }}
            </li>
          </ul>
        </div>
      </article>
    </section>
  </dialog>
</template>

<style lang="scss" scoped>

</style>
