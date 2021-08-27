<template>
  <div class="flex flex-wrap">
    <div
      class="p-4 article"
      v-for="article in data" 
      :key="article.id"
    >
    <nuxt-link :to="'/episodes/' + article.slug">
      <ix-img
        :src="article.metadata.heroimage.imgix_url"
        width="500"
        height="281"
        fixed
        loading="lazy"
      />
    </nuxt-link>
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
#article {
  width: 500px;
}
</style>
