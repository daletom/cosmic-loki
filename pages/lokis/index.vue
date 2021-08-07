<template>
  <div class="p-4">
    <Lokis v-bind:data="getObjects.objects" />
  </div>
</template>

<script>
import getObjects from '../../apollo/queries/allLoki.gql'

export default {
  apollo: {
    getObjects: {
      prefetch: true,
      query: getObjects
    }
  },
};
</script>
