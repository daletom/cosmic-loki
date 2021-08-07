<template>
  <div class="flex flex-wrap">
    <div
      class="p-4 episode"
      v-for="article in data" 
      :key="article.id"
    >
    <p class="text-2xl p-2" v-html="article.title"></p>
      <ix-img
        :src="article.metadata.heroimage.imgix_url"
        width="500"
        height="281"
        fixed
        loading="lazy"
      />
      <p class="p-2" v-html="article.content"></p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['data'],
}
</script>

<style>
#episode {
  width: 500px;
}
</style>
