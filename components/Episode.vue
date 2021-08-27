<template>
  <div class="text-center">
      <div
      class="py-8 px-8 mx-auto bg-yellow-100 rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 md:py-4 md:flex md:items-center md:space-y-0 md:space-x-6"
      v-for="article in data" 
      :key="article.id"
      >
        <ix-img
        class="lg:w-1/2 md:w-1/3 w-full"
        :src="article.metadata.heroimage.imgix_url"
        loading="lazy"
        :imgixParams="{ fit: 'crop', ar: '1.8:1', crop: 'faces,edges' }"
        sizes="(min-width: 1024px) calc(60vw - 192px), 75vw"
        />
        <div class="text-center space-y-2">
          <div class="space-y-0.5">
            <h1 class="p-4 text-4xl">{{article.title}}</h1>
          <p class="blog-description inline text-xl" v-html="article.content"></p> 
          </div>
        </div>
        <SocialHead
      :title="article.title"
      :description="article.content"
      :image="article.metadata.heroimage.imgix_url"
      />
      </div>
      </div>
</template>

<script>
export default {
  name: 'Episode',
  props: ['data']
}
</script>
