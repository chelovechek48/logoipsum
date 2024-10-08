<script setup>
import SvgTemplate from '@components/SvgTemplate.vue';
import ImgTemplate from '@components/ImgTemplate.vue';
import PostInfo from '@components/PostInfo.vue';

const emit = defineEmits(['changeFilter', 'toggleModal']);
defineProps({
  items: {
    type: Array,
    required: true,
  },
});

</script>

<template>
  <section class="container">
    <div class="bg-white my-5 p-5 rounded-xl">
      <ul v-if="items.length" class="list">
        <li
          class="flex flex-col gap-2.5"
          v-for="item in items"
          :key="item"
        >
          <button
            class="rounded-xl overflow-hidden"
            style="aspect-ratio: 400 / 250"
            @click="emit('toggleModal', { open: true, item: item })"
          >
            <ImgTemplate
              class=" object-cover object-center"
              :src="item.image"
            />
          </button>
          <PostInfo :item="item" />
          <header class="text-large font-semibold">
            {{ item.title }}
          </header>
          <p class="text-normal">
            {{ item.description.short }}
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
        </li>
      </ul>
      <div
        v-else class="
        max-w-[20rem] mx-auto
        text-center font-medium
        flex flex-col items-center gap-2
      "
      >
        <SvgTemplate
          icon-id="search-empty" viewBox="0 0 34 42"
          class="h-10 text-blue-gray-200"
        />
        <header class="text-normal text-blue-gray-400">
          Поиск не дал результатов
        </header>
        <p class="text-small text-blue-gray-300">
          Повторите поиск или используйте фильтр для структуризации контента
        </p>
        <button
          class="text-blue-primary bg-transparent text-normal capitalize"
          @click="emit('changeFilter', { search: '', category: [] })"
        >
          сбросить
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  gap: 40px 20px;

  img {
    aspect-ratio: 400 / 250;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
