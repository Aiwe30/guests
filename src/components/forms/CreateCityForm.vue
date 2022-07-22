<script setup>
import {reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, alpha, integer } from "@vuelidate/validators";
import { useGuestStore } from "../../stores/guestStore.js";
import { useRouter } from "vue-router";

const router = useRouter();
const cityStore = useGuestStore();

const city = reactive({
  country_id: '',
  name: ''
});

const cityValidationRules = computed(() => {
  return {
    country_id: {required, integer},
    name: {required, alpha},
  }
});

const v$ = useVuelidate(cityValidationRules, city);

const storeCity = async () => {
  const validateCity = await v$.value.$validate();
  if (validateCity) {
    cityStore.storeCity({
      country_id: city.country_id,
      name: city.name,
      guests: [],
    });
    v$.value.$reset();
    resetCity();
    await router.push('/');
  }
}

const resetCity = () => {
  city.country_id = '';
  city.name = '';
}
</script>
<template>
  <div class="container d-flex justify-content-center">
    <div class="card border-0 shadow col-12 col-lg-8 col-xl-6">
      <h3 class="card-title text-center mt-3">Add City</h3>

      <form class="row card-body" @submit.prevent="storeCity">
        <div class="my-2">
          <label for="country-id" class="form-label">Country</label>
          <select id="country-id" class="form-select" name="country_id" v-model="city.country_id">
            <option disabled value="" selected>Please Select One</option>
            <option :value="country.id" v-for="country in cityStore.getAllGuests" :key="country.id">{{ country.name }}</option>
          </select>
          <span class="text-danger ms-3 my-2">
            <small v-if="v$.country_id.$errors[0]">{{ v$.country_id.$errors[0].$message }}</small>
          </span>
        </div>

        <div class="my-2">
          <label for="name" class="form-label">City</label>
          <input type="text" id="name" class="form-control" name="city_name" placeholder="Vilnius" v-model="city.name">
          <span class="text-danger ms-3 my-2">
            <small v-if="v$.name.$errors[0]">{{ v$.name.$errors[0].$message }}</small>
          </span>
        </div>

        <div class="my-4">
          <button type="submit" class="btn btn-primary">add city</button>
        </div>
      </form>

    </div>
  </div>
</template>