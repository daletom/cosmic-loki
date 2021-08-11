<template>
  <div class="flex flex-wrap">
    <div
      class="p-4 episode"
      v-for="episode in data" 
      :key="episode.id"
    >
    <p class="text-2xl p-2" v-html="episode.title"></p>
      <ix-img
        :src="episode.metadata.heroimage.imgix_url"
        width="500"
        height="281"
        fixed
        loading="lazy"
      />
      <p class="p-2" v-html="episode.content"></p>
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
