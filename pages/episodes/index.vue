<template>
  <div class="p-4">
    <Episodes v-bind:data="getObjects.objects" />
  </div>
</template>

<script>
import getObjects from '../../apollo/queries/allEpisodes.gql'

export default {
  apollo: {
    getObjects: {
      prefetch: true,
      query: getObjects,
    }
  },
};
</script>
