<template>
  <ul>
    <resource-item v-for="res in storedResources"
     :key="res.id"
     :title="res.title"
     :description="res.description"
     :link="res.link"
    ></resource-item>
  </ul>    
</template>

<script>
import ResourceItem from './components/learningResources/ResourceItem.vue';

export default {
  components: {
    ResourceItem,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org'
        },
      ],
    };
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>