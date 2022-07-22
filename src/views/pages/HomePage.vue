<script setup>
import { useGuestStore } from "../../stores/guestStore.js";
import GuestList from "../../components/lists/GuestList.vue";

const guestStore = useGuestStore();
guestStore.loadAllGuests();
</script>

<template>
  <GuestList />
</template>

<style scoped>

</style>