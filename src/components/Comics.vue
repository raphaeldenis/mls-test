<template>
  <div>
    <button @click="getComics">Get Comics</button>
    <ul>
      <li v-for="(comic, index) in comics" :key="index">{{ comic.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MarvelAPI from '@/services/marvelAPI';
import store from '@/store';

export default defineComponent({
  name: 'Comics',
  data() {
    return {
      comics: store.state.comics,
    };
  },
  methods: {
    getComics() {
      MarvelAPI.fetchAll('comics')
        .then((response: any) => {
          store.commit('setComics', response.data.data.results);
          console.log(store.state.comics);
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
