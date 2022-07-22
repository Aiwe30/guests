<script setup>
import { useGuestStore } from "../../stores/guestStore.js";
const guestStore = useGuestStore();
guestStore.loadAllGuests();
</script>
<template>
  <div class="container d-flex justify-content-center mb-5">
    <div class="card border-0 col-12 col-lg-10 col-xl-8">
      <span v-for="country in guestStore.getAllGuests" :key="country.id">
        <span v-for="city in country.cities" :key="city.id">
          <div class="card-title mt-3 ms-4">
            <i class="bi bi-geo-alt"></i>
            {{ country.name }} > {{ city.name }}
          </div>
          <span v-for="guest in city.guests" :key="guest.id">
            <div class="card-body">
        <div class="card border-0 shadow">
          <div class="row card-body">
            <div class="col-md-2 d-flex justify-content-center align-content-center">
              <h1><i class="bi bi-person-circle"></i></h1>
            </div>
            <div class="col-md-5 d-flex flex-column justify-content-center align-items-center align-items-md-start">
              <div>
                <strong>{{ guest.gender }}. {{ guest.firstName }} {{ guest.lastName }}</strong>
                <small> ({{ guest.age }})</small>
              </div>
            </div>
            <div class="col-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center align-items-center">
              <a :href = "'mailto:' + guest.email">contact me by email</a>
            </div>
          </div>
        </div>
      </div>
          </span>
        </span>
      </span>
    </div>
  </div>
</template>