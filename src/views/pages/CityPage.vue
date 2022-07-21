<script setup>
import { useGuestStore } from "../../stores/guestStore.js";
import { useRoute} from 'vue-router';

const guestStore = useGuestStore();
guestStore.loadAllGuests();

const route = useRoute();
const routeId = route.params.id;

const cities = guestStore.getAllGuests.flatMap((country) => {
  return country.cities.filter((city) => city.id === Math.floor(routeId));
});
</script>
<template>
  <div class="container d-flex justify-content-center mb-5">
    <div class="card border-0 col-12 col-lg-10 col-xl-8" v-for="city in cities" :key="city.id">
      <div class="card-title text-center mt-3">
        <h5>{{ city.name }}</h5>
      </div>
      <div class="card-body">
        <div class="card border-0 shadow my-2" v-for="guest in city.guests" :key="guest.id">
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
              <a href = "mailto: {{ guest.email}}">contact me by email</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>