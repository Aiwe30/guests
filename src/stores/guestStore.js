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
            this.guests[guest.country_id -1].cities[guest.city_id -1].guests.push({
                id: 11,
                ...guest
            });
        }
    },
    getters: {
        getAllGuests(state) {
            return  [...state.guests];
        }
    }
})