<script setup>
import SvgTemplate from '@components/SvgTemplate.vue';
import PostInfo from '@components/PostInfo.vue';
import ImgTemplate from '@components/ImgTemplate.vue';

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
    <div
      class="
        fixed top-0 left-0 w-full h-full
        flex flex-col items-center justify-start bg-black bg-opacity-50 overflow-y-auto
      "
    >
      <div class="show flex items-center justify-center flex-1 w-full p-3">
        <div
          class="
          flex flex-col gap-2.5
          bg-white rounded-xl p-3 m-3 max-w-[35rem] w-full
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
          <PostInfo :item="item" />
          <ImgTemplate
            class=" rounded-xl overflow-hidden object-cover object-center"
            :src="item.image"
          />
          <p class="text-normal">
            {{ item.description.full }}
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
      </div>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
.show {
  @keyframes show {
    0% {
      translate: 0 -100%;
    }
    100% {
      translate: 0 0;
    }
  }

  animation: show 750ms ease;
}
</style>
