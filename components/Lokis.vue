<template>
  <div class="flex flex-wrap">
    <div
      class="p-4 episode"
      v-for="article in data" 
      :key="article.id"
    >
      <nuxt-link :to="'/lokis/' + article.slug">
      <ix-img
        :src="article.metadata.avatar.imgix_url"
        :imgixParams="{ fit: 'crop', mask: 'ellipse', crop: 'faces,edges', txt: article.title, 'txt-align': 'middle,center', 'txt-fit': 'max', 'txt-size': '72', 'txt-color': 'white', blend: 'https://demos.imgix.net/dark-ellipse-gradient.ai?fm=png&ar=2:1', 'blend-mode': 'multiply', 'blend-size': 'inherit' }"
        width="500"
        height="500"
        fixed
        loading="lazy"
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

<style>
#episode {
  width: 500px;
}
</style>
