<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
@import '@/assets/normalize.css';

body {
  font-family: 'Roboto', sans-serif;
}
</style>
