<script setup>
import SvgTemplate from '@components/SvgTemplate.vue';
import spritePost from '@icons/sprite-post.svg';

defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const getCommentWord = (count) => {
  const num = Number(count);
  if (num === 1) {
    return 'комментарий';
  } if (num % 10 === 1 && num % 100 !== 11) {
    return 'комментарий';
  } if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
    return 'комментария';
  }
  return 'комментариев';
};
</script>

<template>
  <div class="flex gap-3 text-small text-blue-gray-400 font-medium">
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
      {{ `${item.comments} ${getCommentWord(item.comments)}` }}
    </div>
  </div>
</template>
