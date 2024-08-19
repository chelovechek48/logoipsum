<script setup>
import SvgTemplate from '@components/SvgTemplate.vue';
import spritePost from '@icons/sprite-post.svg';

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex gap-2.5 text-small text-blue-gray-400 font-medium">
    <div>
      {{ item.date }}
    </div>
    <div class="flex items-center gap-1">
      <SvgTemplate
        icon-id="time" :sprite="spritePost"
        class="h-4 inline-flex"
      />
      {{ item.time }}
    </div>
    <div class="flex items-center gap-1">
      <SvgTemplate
        icon-id="comment" :sprite="spritePost"
        class="h-4 inline-flex"
      />
      {{ item.comments }} комментарий/ев
    </div>
  </div>
</template>
