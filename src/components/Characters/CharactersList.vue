<template>
  <ul class="list-inside" data-test-id="character-card">
    <li
      class="rounded-t relative -mb-px block border p-4 border-blue mb-4 bg-green-100"
      v-for="character in characters"
      :key="character.id">
      {{ character.name }}
      <br>
    </li>
  </ul>
</template>

<script>

import { mapState } from 'vuex';

export default {
  computed: mapState({
    characters: (state) => state.characters,
  }),
};
</script>
