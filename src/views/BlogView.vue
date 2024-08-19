<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppFilter from '@components/AppFilter.vue';
import PostsList from '@components/PostsList.vue';
import PostModal from '@components/PostModal.vue';
import itemsJSON from '@json/items.json';

const route = useRoute();
const router = useRouter();

const filterProperties = {
  search: ref(route.query.search || ''),
  category: ref(route.query.category ? route.query.category.split(',') : []),
};

const updateFilterProperties = () => {
  router.replace({
    query: {
      search: filterProperties.search.value || undefined,
      category: filterProperties.category.value.join(',') || undefined,
    },
  });
};

const changeFilter = (changedValue) => {
  const entries = Object.entries(changedValue);
  entries.forEach((el) => {
    const key = el[0];
    const value = el[1];
    filterProperties[key].value = value;
  });

  updateFilterProperties();
};

const items = computed(() => itemsJSON.filter((item) => {
  const selectedCategories = filterProperties.category.value;

  const filterCategories = () => item.categories
    .some((category) => selectedCategories.includes(category));

  const filterKeys = {
    category: selectedCategories.length ? filterCategories() : true,
    search: item.title.toLowerCase().includes(filterProperties.search.value.toLowerCase()),
  };

  const hasOnlyTrueKeys = Object.values(filterKeys).every((value) => value);
  return hasOnlyTrueKeys;
}));

const modalItem = ref(items.value[0]);
const toggleModal = (modal) => {
  if (modal.open) {
    window.modalDOM.showModal();
    modalItem.value = modal.item;
  } else {
    window.modalDOM.close();
  }
};

</script>

<template>
  <main>
    <AppFilter
      :properties="filterProperties"
      :json="itemsJSON"
      @changeFilter="changeFilter($event)"
    />
    <PostsList
      :items="items"
      @changeFilter="changeFilter($event)"
      @toggleModal="toggleModal($event)"
    />
    <PostModal
      id="modalDOM"
      :item="modalItem"
      @toggleModal="toggleModal($event)"
    />
  </main>
</template>
