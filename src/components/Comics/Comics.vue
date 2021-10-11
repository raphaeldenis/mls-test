<template>
  <div>
   <h1 class="sm:text-3xl
    text-2xl font-medium text-center title-font text-green-900 mb-4">Comics</h1>
    <h2>Comics</h2>
    <button @click="getComics">Get Comics</button>
    <ComicsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MarvelAPI from '@/services/marvelAPI';
import ComicsList from './ComicsList.vue';
import store from '@/store';

export default defineComponent({
  name: 'Comics',
  data() {
    return {
      comics: store.state.comics,
    };
  },
  components: { ComicsList },
  methods: {
    getComics() {
      MarvelAPI.fetchAll('comics')
        .then((response: any) => {
          store.commit('setComics', response.data.data.results);
          // console.log(store.state.comics);
        })
        .catch((e: Error) => {
          console.warn(e);
        });
    },
  },
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
