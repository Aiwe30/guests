<script setup>
import { useGuestStore } from "../../stores/guestStore.js";
import { useCityStore} from "../../stores/cityStore.js";
const cityStore = useCityStore();

cityStore.loadAllCities()

const guestStore = useGuestStore();
guestStore.loadAllGuests();

</script>
<template>

  <div class="container d-flex flex-column justify-content-center mb-5">
    <div class="card border-0 col-12 col-lg-10 col-xl-8" v-for="guest in guestStore.getAllGuests" :key="guest.id">
      <div class="card-title mt-3 ms-4">
<!--            <i class="bi bi-geo-alt"></i>-->
<!--            Country Name > City Name -->
      </div>
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
    </div>
  </div>
</template>