import { defineStore} from "pinia";
import { useCountryStore } from "./countryStore.js";
import { useCityStore} from "./cityStore.js";

export const useGuestStore = defineStore('GuestStore', {
    state: () => {
        return {
            guests: []
        }
    },
    actions: {
        async loadAllGuests() {
            this.guests = (await import("../data/guests.json")).default;
        },
        storeGuest(guest) {
            this.guests.push({
                id: this.guests.length + 1,
                ...guest
            });
        }
    },
    getters: {
        getAllGuests(state) {
            return  [...state.guests];
        },
        getGuestWithCityAndCountry(state) {
            const cityStore = useCityStore();
            const countryStore = useCountryStore();

            cityStore.loadAllCities();
            countryStore.loadAllCountries();

            const guests = [...state.guests];
            const cities = cityStore.getAllCities;
            const countries = countryStore.getAllCountries;
            return guests.map((guest) => {
                const city = cities.find(city => city.id === guest.cityId);
                const country = countries.find(country => country.id === city.countryId);
                guest.countryName = country.countryName;
                guest.cityName = city.cityName;
                return guest
            });
        }
    }
})