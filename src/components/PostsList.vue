<script setup>
import SvgTemplate from '@components/SvgTemplate.vue';

const emit = defineEmits(['changeFilter', 'toggleModal']);
defineProps({
  items: {
    type: Array,
    required: true,
  },
});

</script>

<template>
  <section class="container bg-white my-5 p-5 rounded-xl">
    <ul v-if="items.length" class="list">
      <li
        class="flex flex-col gap-2.5"
        v-for="item in items"
        :key="item"
      >
        <button
          style="aspect-ratio: 400 / 250"
          @click="emit('toggleModal', { open: true, item: item })"
        >
          <img
            class="rounded-xl object-cover object-center"
            src="@images/image.jpg"
            alt=""
          >
        </button>
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
        <header class="text-large font-semibold">
          {{ item.title }}
        </header>
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
  </section>
</template>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
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
