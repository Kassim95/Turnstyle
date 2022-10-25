<template>
    <div class="theme-options">
      <div id="theme-blue" v-bind:class="{'active': this.themesStore.currentTheme === 'theme-blue' || this.themesStore.currentTheme === null}" @click="this.themesStore.switchTheme('theme-blue')"></div>
      <div id="theme-green" v-bind:class="{'active': this.themesStore.currentTheme === 'theme-green'}" @click="this.themesStore.switchTheme('theme-green')"></div>
    </div>
</template>

<script setup>
  import { useThemesStore } from '../stores/themes'

  const themesStore = useThemesStore()
  console.log(themesStore)

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .theme-options div {
    cursor: pointer;
    height: 20px;
    width: 20px;
    border-radius: 4px;
    border: 1px solid white;
    opacity: 0.5;
    display: inline-block;
    margin: 5px;
  }

  .theme-options .active {
    opacity: 1;
  }

  #theme-blue {
    background-color: #3d23de;
  }
</style>
