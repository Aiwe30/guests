<script setup>
import { useCountryStore} from "../../stores/countryStore.js";
import { useCityStore} from "../../stores/cityStore.js";

const countryStore = useCountryStore();
const cityStore = useCityStore();

countryStore.loadAllCountries();
cityStore.loadAllCities();
</script>
<template>
  <div>
    <ul class="list-group m-0 p-0 mb-5">
      <li class="list-group-item border-0 p-0 bg-light">
        <router-link to="/" class="nav-link px-3 py-2">
          <i class="bi bi-house"></i>
          <span class="ms-2 d-none d-sm-inline">Home</span>
        </router-link>
      </li>
    </ul>

    <ul class="list-group m-0 p-0 mb-5">
      <li class="list-group-item border-0 p-0 bg-light">
        <router-link to="/create-guest" class="nav-link px-3 py-2">
          <i class="bi bi-person-plus"></i>
          <span class="ms-2 d-none d-sm-inline">Create Guest</span>
        </router-link>
      </li>
      <li class="list-group-item border-0 p-0 bg-light">
        <router-link to="/create-city" class="nav-link px-3 py-2">
          <i class="bi bi-bricks"></i>
          <span class="ms-2 d-none d-sm-inline">Create City</span>
        </router-link>
      </li>
    </ul>

    <ul class="list-group m-0 p-0 mt-5">
      <li class="list-group-item border-0 p-0 bg-light" v-for="country in countryStore.getAllCountries" :key="country.id">
        <div class="nav-link px-3 py-2">
          <i class="bi bi-geo-alt"></i>
          <span class="ms-2 d-none d-sm-inline"><strong>{{ country.countryName}}</strong></span>
        </div>
        <ul class="list-group m-0 p-0">
          <li class="list-group-item border-0 p-0 bg-light"  v-for="city in cityStore.getAllCities" :key="city.id">
            <div v-if="country.id === city.countryId">
              <router-link class="nav-link px-3 py-2" :to="{ name: 'city', params: {id: city.id}}">
                <i class="bi bi-building"></i>
                <span class="ms-2 d-none d-sm-inline"> {{ city.cityName }}</span>
              </router-link>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>