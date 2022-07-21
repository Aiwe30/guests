<script setup>
import { useGuestStore } from "../../stores/guestStore.js";

const guestStore = useGuestStore();
guestStore.loadAllGuests();
</script>

<template>
  <h1>Home Page</h1>
  <ol>
    <li v-for="country in guestStore.getAllGuests" :key="country.id">
      {{ country.name }}
      <ol>
        <li v-for="city in country.cities" :key="city.id">
          {{ city.name}}
          <ol>
            <li v-for="guest in city.guests" :key="guest.id">
              {{ guest.firstName }}
            </li>
          </ol>
        </li>
      </ol>
    </li>
  </ol>
</template>

<style scoped>

</style>