<script setup>
import { useCityStore} from "../../stores/cityStore.js";
import { useRoute } from "vue-router";

const cityStore = useCityStore();
cityStore.loadAllCities;

const route = useRoute();
const routeId = route.params.id;

const city = cityStore.getCitiesWithGuests.find(city => city.id === Number(routeId));
</script>
<template>
  <div class="container d-flex flex-column justify-content-center align-items-center mb-5">
    <div class="card border-0 col-12 col-lg-8 col-xl-6">
      <div class="card-title text-center mt-3">
        <h5>{{ city.cityName }}</h5>
      </div>
      <div class="card-body" v-if="city.cityGuests.length > 0">
        <div class="card border-0 shadow my-2" v-for="guest in city.cityGuests" :key="guest.id">
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
      <div class="card-body" v-else>
        <div class="card border-0 shadow my-2" >
          <div class="row card-body">
            <div class="col-12 text-center">
              <div class="py-3">
                <router-link to="/create-guest" class="text-decoration-none">
                  <i class="bi bi-plus-circle-dotted me-2"></i>
                  Add Guest To The City
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>