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
    },
    getters: {
        getAllGuests(state) {
            return  [...state.guests];
        }
    }
})