<template>
<div id="app">
  <md-toolbar class="md-dense">
    <md-button class="md-icon-button">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1">Dense</h2>

    <md-button class="md-icon-button">
      <md-icon>search</md-icon>
    </md-button>

    <md-button class="md-icon-button">
      <md-icon>filter_list</md-icon>
    </md-button>
  </md-toolbar>
  <div class="main-content">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, rerum? Error sunt, aperiam dolores, atque expedita molestiae tenetur. Quis eveniet accusamus velit explicabo adipisci reiciendis modi eaque quas, officia excepturi.</p>
  </div>
  <img src="./assets/logo.png">
  <md-bottom-bar md-shift>
  <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
  <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
  <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
  <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
</md-bottom-bar>
</div>
</template>

<script>
import Hello from './components/Hello';
import Mainnav from './components/Mainnav';
import Charactersheet from './components/Charactersheet';

export default {
  name: 'app',
  components: {
    Hello,
    Mainnav,
    Charactersheet,
  },
};
</script>

<style lang="less">
body {
    margin: 0;
}
</style>
