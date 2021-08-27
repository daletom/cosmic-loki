<template>
  <div class="p-4">
    <Episode v-bind:data="getObjects.objects" />
  </div>
</template>

<script>
import getObjects from '../../apollo/queries/oneEpisode.gql'

export default {
    apollo: {
    getObjects: {
      prefetch: true,
      query: getObjects,
      variables() {
        return {
          slug: this.$route.params.id || ''
        }
      }
    }
  },
}
</script>