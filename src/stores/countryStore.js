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
        },
        storeCountry(country) {
            this.countries.push({
                id: this.countries.length + 1,
                ...country
            });
        }
    },
    getters: {
        getAllCountries(state) {
            return  [...state.countries];
        },
    }
})