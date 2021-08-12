<template>
  <div class="p-4">
    <Heroes v-bind:data="getObjects.objects" />
  </div>
</template>

<script>
import getObjects from '../../apollo/queries/oneHero.gql'

export default {
    apollo: {
    getObjects: {
      prefetch: true,
      query: getObjects,
      variables: {
          slug: route.params.id
      }
    }
  },
    /*async asyncData({app, route}){
            const {data} = await app.apolloProvider.defaultClient.query({
            query: getObjects,
            variables: {
                slug: route.params.slug
            }
            });
            return data
        
    },
    mounted() {
    console.log(this.myRoute);
  },
  computed: {
    myRoute() {
      return this.$route.params.slug;
    },
  },*/
}
</script>