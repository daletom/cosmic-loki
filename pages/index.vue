<template>
  <div class="p-4">
    <Header />
    <Home v-bind:data="getObjects.objects" />
    <SocialHead 
    title="Loki Fan Site"
    description="This is a fan site dedicated to the Loki TV series.  It also serves as a tutorial of how to build a fansite using Nuxt, Cosmic JS, imgix, Tailwind CSS, & Vercel."
    image="https://imgix.cosmicjs.com/872d1500-f738-11eb-a171-71d9db0ee496-lokihero.jpeg"
    />
  </div>
</template>

<script>
import getObjects from '../apollo/queries/allHomes.gql'


export default {
  apollo: {
    getObjects: {
      prefetch: true,
      query: getObjects
    }
  },
};
</script>
