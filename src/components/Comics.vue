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
import { Comics } from '@/types/Comics';

export default defineComponent({
  name: 'Comics',
  data() {
    return {
      comics: [] as Comics,
    };
  },
  methods: {
    getComics() {
      MarvelAPI.fetchAll('comics')
        .then((response: any) => {
          this.comics = response.data.data.results;
        })
        .catch((e: Error) => {
          console.warn(e);
        });
    },
    // data() {
    //   return {
    //     // comics: [
    //     //   { id: 0, name: 'test' },
    //     //   { id: 1, name: 'test1' },
    //     // ],
    //     comics: [],
    //   };
    // },
    // // setup() {
    // //   onMounted(() => {
    // //     this.methods.getComics();
    // //   });
    // // },
    // methods: {
    //   async getComics() {
    //     console.log('CLIQUED');
    //     await MarvelAPI.fetchAll('comics').then((response) => {
    //       this.comics = response.data.data.results;
    //     });
    //   },
    // },
  },
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
