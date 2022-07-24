import  { defineStore} from "pinia";

export const useCityStore = defineStore('CityStore', {
    state: () => {
        return {
            cities: []
        }
    },
    actions: {
        async loadAllCities() {
            this.cities = (await import("../data/cities.json")).default;
        },
        storeCity(city) {
            this.cities.push({
                id: this.cities.length + 1,
                ...city
            });
        }
    },
    getters: {
        getAllCities(state) {
            return  [...state.cities];
        }
    }
})

