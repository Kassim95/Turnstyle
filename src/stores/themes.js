import { defineStore } from "pinia";

export const useThemesStore = defineStore("themes", {
    state: () => {
        return {
            currentTheme: localStorage.getItem('theme-color') === null ? 'theme-blue' && localStorage.getItem('theme-color') : localStorage.getItem('theme-color')
        }
    },
    actions: {
        switchTheme(theme) {
            localStorage.setItem('theme-color', theme)
            this.currentTheme = localStorage.getItem('theme-color')
        }
    }
})