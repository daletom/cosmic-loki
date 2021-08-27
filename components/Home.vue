<template>
    <div class="flex flex-wrap">
    <div
      v-for="article in data" 
      :key="article.id"
      class="p-4"
    >
    <nuxt-link
      :to="article.slug"
      class="p-4 episode"
    >
    <p class="text-2xl p-2">{{article.title}}</p>
      <ix-img
        :src="article.metadata.heroimage.imgix_url"
        :imgixParams="{ fit: 'crop' }"
        width="600"
        height="450"
        loading="lazy"
        fixed
      />
    </nuxt-link>
    </div>
    </div>
</template>

<script>

export default {
  props: ['data'],
}
</script>