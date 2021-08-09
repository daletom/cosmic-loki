<template>
  <div class="text-center">
      <div class="py-8 px-8 mx-auto bg-yellow-100 rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 md:py-4 md:flex md:items-center md:space-y-0 md:space-x-6">
        <ix-img
        class="lg:w-1/2 md:w-1/3 w-full"
        src="https://imgix.cosmicjs.com/872d1500-f738-11eb-a171-71d9db0ee496-lokihero.jpeg"
        loading="lazy"
        :imgixParams="{ fit: 'crop', ar: '1.8:1', crop: 'faces,edges' }"
        sizes="(min-width: 1024px) calc(60vw - 192px), 75vw"
        />
        <div class="text-center space-y-2">
          <div class="space-y-0.5">
            <h1 class="p-4 text-4xl">Individual Loki Page to be created...</h1>
          <p class="blog-description inline text-xl">Still working on this, need to create a getObject in apollo based off a dynamic slug.</p> 
          </div>
        </div>
      </div>
      </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>
