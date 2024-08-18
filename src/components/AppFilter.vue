<script setup>
import { ref } from 'vue';
import SvgTemplate from '@components/SvgTemplate.vue';

const emit = defineEmits(['changeFilter']);
const props = defineProps({
  properties: {
    type: Object,
    required: true,
  },
  json: {
    type: Object,
    required: true,
  },
});

const selectedCategories = ref(props.properties.category);
const categories = new Set(props.json.flatMap((item) => item.categories));

</script>

<template>
  <aside class="sticky top-0 bg-white py-5">
    <div
      class="
        flex items-center gap-x-10 gap-y-2.5
        flex-wrap tablet:flex-nowrap
        container
      "
    >
      <span class="text-indigo text-header font-bold">
        Блог
      </span>
      <div
        class="
          focus-within:outline
          w-full
          p-2.5 rounded-md
          flex items-center gap-2.5
          bg-background
          order-last tablet:order-none
        "
      >
        <SvgTemplate
          icon-id="search"
          class="w-4 h-4 text-blue-gray-300"
        />
        <input
          class="
            flex-1
            text-indigo placeholder:text-blue-gray-300
            text-normal font-medium
            w-full bg-transparent focus:outline-none
          "
          type="search"
          placeholder="Поиск"
          :value="properties.search.value"
          @input="emit('changeFilter', { search: $event.target.value })"
        >
        <button
          v-show="properties.search.value"
          tabindex="-1"
          class="flex" style="rotate: 45deg;"
          @click="emit('changeFilter', { search: '' })"
        >
          <SvgTemplate
            icon-id="plus"
            class="w-4 h-4 text-blue-gray-300"
          />
        </button>
      </div>
      <div class="flex gap-5 ml-auto">
        <button
          class="text-blue-primary bg-transparent text-normal capitalize"
          @click="emit('changeFilter', { search: '', category: [] })"
        >
          очистить
        </button>
        <details class="text-blue-gray-300">
          <summary
            class="flex items-center gap-2.5 cursor-pointer capitalize"
          >
            фильтр
            <SvgTemplate
              icon-id="arrow"
              class="w-3 h-3"
            />
          </summary>
          <div class="absolute top-full left-0 w-full bg-white overflow-hidden">
            <ul class="flex gap-5 py-5 overflow-x-auto container">
              <li
                v-for="category in categories"
                :key="category"
              >
                <input
                  class="peer absolute opacity-0 pointer-events-none"
                  type="checkbox"
                  :id="category"
                  :value="category"
                  v-model="selectedCategories"
                  @change="emit('changeFilter', { category: selectedCategories })"
                >
                <label
                  class="
                  text-blue-primary peer-checked:text-white
                  bg-blue-100 peer-checked:bg-blue-primary
                    capitalize
                    rounded-3xl
                    px-3.5 py-2
                    cursor-pointer
                    flex items-center gap-2.5
                  "
                  :for="category"
                >
                  {{ category }}
                  <SvgTemplate
                    icon-id="check"
                    class="w-3 h-3 icon-checked hidden"
                  />
                  <SvgTemplate
                    icon-id="plus"
                    class="w-3 h-3 icon-unchecked"
                  />
                </label>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>

input[type="checkbox"]:checked + label {
  & .icon {
    &-checked {
      display: block;
    }
    &-unchecked {
      display: none;
    }
  }
}
</style>
