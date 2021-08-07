<template>
  <div class="p-4">
    <Articles v-bind:data="getObjects.objects" />
  </div>
</template>

<script>
import getObjects from '../../apollo/queries/allArticle.gql'

export default {
  apollo: {
    getObjects: {
      prefetch: true,
      query: getObjects
    }
  },
};
</script>
