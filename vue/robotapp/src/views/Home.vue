<template>
  <div class="home">
    <Robotsetup />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Robotsetup from '@/components/Robotsetup.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Robotsetup,
  },
});
</script>
