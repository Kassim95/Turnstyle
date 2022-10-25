<template>
  <div class="app-container" v-bind:class="(this.themesStore.currentTheme === null ||  this.themesStore.currentTheme === undefined) ? 'theme-blue-app' : this.themesStore.currentTheme + '-app'">
    <ClientLogo />

    <ThemeOptions />

    <HeroSection />
    
    <SurveyForm />
  </div>
  <footer>
    <h5>© 2022 Lorem Ipsum. All Rights Reserved.</h5>
  </footer>
</template>

<script setup>
  import ClientLogo from './components/ClientLogo.vue'
  import ThemeOptions from './components/ThemeOptions.vue'
  import HeroSection from './components/HeroSection.vue'
  import SurveyForm from './components/SurveyForm.vue'
  import 'form-wizard-vue3/dist/form-wizard-vue3.css'
  import { useThemesStore } from './stores/themes'

  const themesStore = useThemesStore()
  console.log(themesStore.currentTheme)
  
</script>


<style>

.theme-blue-app {
  background-color: rgba(61, 35, 222, .1);
}

.theme-green-app {
  background-color: rgba(78,225,178, 0.1);
}

.app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  padding: 40px;
}

#theme-green {
  background-color: #4ee1b2
}

.theme-blue-app .form-wizard-vue .fw-body-list .fw-list-progress-active, .theme-blue-app  .form-wizard-vue .fw-btn:not(.fw-btn-back), .theme-blue-app  .form-wizard-vue .fw-step-active {
  background: #3d23de !important;
}

.theme-green-app .form-wizard-vue .fw-body-list .fw-list-progress-active, .theme-green-app  .form-wizard-vue .fw-btn:not(.fw-btn-back), .theme-green-app  .form-wizard-vue .fw-step-active {
  background: #4ee1b2 !important;
}

.theme-blue-app .form-wizard-vue .fw-step-checked {
  border: 2px solid #3d23de;
}

.theme-green-app .form-wizard-vue .fw-step-checked {
  border: 2px solid #4ee1b2;
}

button {
  cursor: pointer;
}
button:active {
  transform: translateY(1px);
}

footer {
  text-align: center;
}
</style>
