import  { defineStore} from "pinia";
import { useGuestStore} from "./guestStore.js";

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
        },
        getCitiesWithGuests(state) {
            const guestStore = useGuestStore();
            guestStore.loadAllGuests();

            const cities = [...state.cities];
            const guests = guestStore.getAllGuests;
            return cities.map((city) => {
                const cityGuests = guests.filter(guest => guest.cityId === city.id)
                city.cityGuests = cityGuests;
                return city
            });
        }
    }
})

