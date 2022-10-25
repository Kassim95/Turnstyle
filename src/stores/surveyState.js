import { defineStore } from "pinia";

export const useSurveyStateStore = defineStore("survey", {
    state: () => {
        return {
            surveyState: localStorage.getItem('survey-state') === null ? false :  Boolean(localStorage.getItem('survey-state'))
        }
    },
    actions: {
        toggleSurveyState() {
            localStorage.setItem('survey-state', true)
            this.surveyState = true
        }
    }
})