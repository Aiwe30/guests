<script setup>
import {reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, alpha, integer } from "@vuelidate/validators";
import { useCountryStore } from "../../stores/countryStore.js";
import { useCityStore } from "../../stores/cityStore.js";
import { useRouter } from "vue-router";

const router = useRouter();
const countryStore = useCountryStore();
const cityStore = useCityStore();

countryStore.loadAllCountries();

const city = reactive({
  countryId: '',
  cityName: ''
});

const cityValidationRules = computed(() => {
  return {
    countryId: {required, integer},
    cityName: {required, alpha},
  }
});

const v$ = useVuelidate(cityValidationRules, city);

const storeCity = async () => {
  const validateCity = await v$.value.$validate();
  if (validateCity) {
    cityStore.storeCity({
      countryId: city.countryId,
      cityName: city.cityName,
      guests: [],
    });
    v$.value.$reset();
    resetCity();
    await router.push('/');
  }
}

const resetCity = () => {
  city.countryId = '';
  city.cityName = '';
}
</script>
<template>
  <div class="container d-flex justify-content-center">
    <div class="card border-0 shadow col-12 col-lg-8 col-xl-4">
      <h3 class="card-title text-center mt-3">Add City</h3>

      <form class="row card-body" @submit.prevent="storeCity">
        <div class="my-2">
          <label for="country-id" class="form-label">Country</label>
          <select id="country-id" class="form-select" name="countryId" v-model="city.countryId">
            <option disabled value="" selected>Please Select One</option>
            <option :value="country.id" v-for="country in countryStore.getAllCountries" :key="country.id">{{ country.countryName }}</option>
          </select>
          <span class="text-danger ms-3 my-2">
            <small v-if="v$.countryId.$errors[0]">{{ v$.countryId.$errors[0].$message }}</small>
          </span>
        </div>

        <div class="my-2">
          <label for="city-name" class="form-label">City</label>
          <input type="text" id="city-name" class="form-control" name="city_name" placeholder="Vilnius" v-model="city.cityName">
          <span class="text-danger ms-3 my-2">
            <small v-if="v$.cityName.$errors[0]">{{ v$.cityName.$errors[0].$message }}</small>
          </span>
        </div>

        <div class="my-4">
          <button type="submit" class="btn btn-primary">add city</button>
        </div>
      </form>

    </div>
  </div>
</template>