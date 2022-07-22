import { defineStore} from "pinia";

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
            const guestArray = this.guests[guest.country_id -1].cities[guest.city_id -1].guests;
            guestArray.push({
                id: guestArray.length + 1,
                ...guest
            });
        },
        storeCity(city) {
            const cityArray = this.guests[city.country_id -1].cities;
            cityArray.push({
                id: cityArray.length + 1,
                ...city
            });
        }
    },
    getters: {
        getAllGuests(state) {
            return  [...state.guests];
        }
    }
})