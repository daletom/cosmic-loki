<template>
  <div class="p-4">
    <Heroes v-bind:data="getObjects.objects" />
  </div>
</template>

<script>
import getObjects from '../../apollo/queries/allHeroes.gql'

export default {
  apollo: {
    getObjects: {
      prefetch: true,
      query: getObjects
    }
  },
};
</script>
