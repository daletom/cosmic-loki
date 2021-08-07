<template>
  <div class="p-4">
    <Hero />
    <div class="flex flex-wrap">
    <nuxt-link
      to="/episodes"
      class="p-4 episode"
    >
    <p class="text-2xl p-2">Episodes</p>
      <ix-img
        src="https://imgix.cosmicjs.com/4fc12bd0-f731-11eb-a171-71d9db0ee496-episodes.jpeg?auto=format,compress&w=600&h=450&fit=crop"
        width="600"
        height="450"
        loading="lazy"
      />
    </nuxt-link>
    <nuxt-link
      to="/lokis"
      class="p-4 episode"
    >
    <p class="text-2xl p-2">The Lokis</p>
      <ix-img
        src="https://imgix.cosmicjs.com/4b4344d0-f731-11eb-a171-71d9db0ee496-thelokis.jpg?auto=format,compress&w=600&h=450&fit=crop"
        width="600"
        height="450"
        loading="lazy"
      />
    </nuxt-link>
    <nuxt-link
      to="/about"
      class="p-4 episode"
    >
    <p class="text-2xl p-2">About</p>
      <video autoplay loop muted playsinline style="width: 600px; height: 450px">
        <source
          src="https://imgix.cosmicjs.com/4ba2f100-f731-11eb-a171-71d9db0ee496-lokiabout.gif?fm=mp4&w=600&h=450&fit=crop"
          type="video/mp4"
        >
      </video>
    </nuxt-link>
  </div>
  </div>
</template>

<script>
/*import getObjects from '../apollo/queries/allArticle.gql'

export default {
  apollo: {
    getObjects: {
      prefetch: true,
      query: getObjects
    }
  },
};*/
</script>
