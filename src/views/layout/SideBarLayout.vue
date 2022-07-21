<script setup>
import { useGuestStore } from "../../stores/guestStore.js";

const guestStore = useGuestStore();
guestStore.loadAllGuests();
</script>
<template>
  <div>
    <ul class="list-group m-0 p-0 mb-5">
      <li class="list-group-item border-0 p-0">
        <router-link to="/" class="nav-link px-3 py-2">
          <i class="bi bi-house"></i>
          <span class="ms-2 d-none d-sm-inline">Home</span>
        </router-link>
      </li>
    </ul>

    <ul class="list-group m-0 p-0 mt-5">
      <li class="list-group-item border-0 p-0" v-for="country in guestStore.getAllGuests" :key="country.id">
        <div class="nav-link px-3 py-2">
          <i class="bi bi-geo-alt"></i>
          <span class="ms-2 d-none d-sm-inline">{{ country.name}}</span>
        </div>
        <ul class="list-group m-0 p-0">
          <li class="list-group-item border-0 p-0" v-for="(city, index) in country.cities" :key="index">
            <router-link class="nav-link px-3 py-2" :to="{ name: 'city', params: {id: city.id}}">
              <i class="bi bi-building"></i>
              <span class="ms-2 d-none d-sm-inline"> {{ city.name }}</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>