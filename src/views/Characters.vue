<template>
  <div>
   <h1 class="sm:text-3xl
    text-2xl font-medium text-center title-font text-green-900 mb-4">Characters</h1>
    <button @click="getCharacters">Get Characters</button>
    <CharactersList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MarvelAPI from '@/services/marvelAPI';
import CharactersList from '@/components/Characters/CharactersList.vue';
import store from '@/store';

export default defineComponent({
  name: 'Characters',
  data() {
    return {
      comics: store.state.characters,
    };
  },
  components: { CharactersList },
  methods: {
    getCharacters() {
      MarvelAPI.fetchAll('characters')
        .then((response: any) => {
          store.commit('setCharacters', response.data.data.results);
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
