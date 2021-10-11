<template>
  <ul class="list-inside" >
    <li
      class="rounded-t relative -mb-px block border p-4 border-blue mb-4 bg-green-100"
      v-for="comic in comics"
      :key="comic.id">
      {{ comic.title }}
      <br>
    </li>
  </ul>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState({
    comics: (state) => state.comics,
  }),
  // created() {
  //   this.$store.dispatch('products/getAllProducts');
  // },
};
</script>
