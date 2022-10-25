<template>
    <div class="hero-container" v-if="!this.surveyStateStore.surveyState">
      <h1>Lorem Ipsum Survey</h1>
      <p>We want to know more about our customers and what they want. This information will help us put together the right mix of products and services to ensure your satisfaction.</p>
      <button class="start-survey" @click="this.surveyStateStore.toggleSurveyState">Start</button>
    </div>
</template>

<script setup>
  import { useSurveyStateStore } from '../stores/surveyState'

  const surveyStateStore = useSurveyStateStore()
  console.log(surveyStateStore.surveyState)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hero-container {
    width: 60%;
    margin: 0 auto;
  }
  .hero-container h1, .hero-container p, .hero-container button {
    margin: 10px;
  }
  .theme-blue-app .start-survey {
  background: #3d23de;
}

.theme-green-app .start-survey {
  background: #4ee1b2;
}

.start-survey {
  padding: 0.7rem 1.5rem;
  min-width: unset;
  border-radius: 0.4rem;
  border: none;
  font-family: DM Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  color: #fff;
}

</style>
