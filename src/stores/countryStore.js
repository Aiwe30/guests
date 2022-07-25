import  { defineStore} from "pinia";

export const useCountryStore = defineStore('CountryStore', {
    state: () => {
        return {
            countries: [],
        }
    },
    actions: {
        async loadAllCountries() {
            this.countries = (await import("../data/countries.json")).default;
        }
    },
    getters: {
        getAllCountries(state) {
            return  [...state.countries];
        }
    }
})