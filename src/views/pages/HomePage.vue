<script setup>
import { useGuestStore } from "../../stores/guestStore.js";
import CreateGuestForm from "../../components/forms/CreateGuestForm.vue";
import GuestList from "../../components/lists/GuestList.vue";

const guestStore = useGuestStore();
guestStore.loadAllGuests();
</script>

<template>
  <GuestList />
  <CreateGuestForm />
</template>

<style scoped>

</style>