<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Comics />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Comics from '@/components/Comics.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Comics,
  },
});
</script>
