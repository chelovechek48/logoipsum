<script setup>
const props = defineProps({
  src: {
    type: Object,
    required: true,
  },
});

const images = import.meta.glob('@images/**/*.*', { eager: true });
const getImage = (imageName) => {
  const imageNameWithPath = `/src/assets/images/${imageName}`;
  return images[imageNameWithPath].default;
};

const getSrcset = (type) => {
  const imageSources = Object.entries(props.src[type]);
  const srcsetArray = imageSources.map((imageData) => {
    const size = imageData[0];
    const path = getImage(imageData[1]);
    return `${path} ${size}`;
  });
  return srcsetArray.join(', ');
};

const imageTypesArray = Object.entries(props.src)
  .filter((source) => !(
    ['default', 'alt'].includes(source[0])
  ))
  .map((source) => source[0]);

</script>

<template>
  <picture>
    <source
      v-for="imageType in imageTypesArray"
      :key="imageType"
      :type="imageType"
      :srcset="getSrcset(imageType)"
    >
    <img :alt="props.src.alt" loading="lazy">
  </picture>
</template>

<style lang="scss" scoped>
picture {
  width: 100%;
}
img {
  display: block;
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: inherit;
  aspect-ratio: inherit;
}
</style>
