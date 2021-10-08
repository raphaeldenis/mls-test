<template>
  <h3>Comics view</h3>
  <div>
    <button @click="getComics">Click</button>
    <ul>
      <li v-for="(comic, index) in comics" :key="index">{{ comic.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MarvelAPI from '@/services/marvelAPI';

export default defineComponent({
  name: 'Comics',
  data() {
    return {
      // comics: [
      //   { id: 0, name: 'test' },
      //   { id: 1, name: 'test1' },
      // ],
      comics: [],
    };
  },
  // setup() {
  //   onMounted(() => {
  //     this.methods.getComics();
  //   });
  // },
  methods: {
    async getComics() {
      console.log('CLIQUED');
      await MarvelAPI.fetchAll('comics').then((response) => {
        this.comics = response.data.data.results;
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
