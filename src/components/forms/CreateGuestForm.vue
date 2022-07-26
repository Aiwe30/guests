<script setup>
import {reactive, computed} from "vue";
import useVuelidate from "@vuelidate/core";
import { required, alpha, integer, minValue, maxValue, email, alphaNum, minLength } from "@vuelidate/validators";
import { useGuestStore } from "../../stores/guestStore.js";
import { useCityStore } from "../../stores/cityStore.js";
import { useRouter } from "vue-router";

const router = useRouter();
const guestStore = useGuestStore();
const cityStore = useCityStore();
cityStore.loadAllCities;

const guest = reactive({
  cityId: '',
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  email: '',
  password: ''
});

const guestValidationRules = computed(() => {
  return {
    cityId: {required, integer},
    firstName: {required, alpha},
    lastName: {required, alpha},
    age: {required, integer, minValue: minValue(18), maxValue: maxValue(130)},
    gender: {required, alpha},
    email: {required, email},
    password: {required, alphaNum, minLength: minLength(6)}
  }
});

const v$ = useVuelidate(guestValidationRules, guest);

const storeGuest = async () => {
  const validateGuest = await v$.value.$validate();
  if (validateGuest) {
    guestStore.storeGuest({
      cityId: guest.cityId,
      firstName: guest.firstName,
      lastName: guest.lastName,
      age: guest.age,
      gender: guest.gender,
      email: guest.email,
      password: guest.password
    });
    v$.value.$reset();
    resetGuest();
    await router.push('/');
  }
}

const resetGuest = () => {
  guest.cityId = '';
  guest.firstName = '';
  guest.lastName = '';
  guest.age = '';
  guest.gender = '';
  guest.email = '';
  guest.password = ''
}
</script>
<template>
  <div class="container d-flex justify-content-center">
    <div class="card border-0 shadow col-12 col-lg-8 col-xl-4">
      <h3 class="card-title text-center mt-3">Add Guest</h3>

      <form class="row card-body" @submit.prevent="storeGuest">
        <div class="col-12 my-2">
          <label for="city-id" class="form-label">City</label>
          <select id="city-id" class="form-select" name="cityId" v-model="guest.cityId">
            <option disabled value="" selected>Please Select One</option>
            <option :value="city.id" v-for="city in cityStore.getAllCities" :key="city.id">{{ city.cityName}}</option>
          </select>
          <span class="text-danger ms-3 my-2">
            <small v-if="v$.cityId.$errors[0]">{{ v$.cityId.$errors[0].$message }}</small>
          </span>
        </div>

        <div class="col-md-6 my-2">
          <label for="first-name" class="form-label">First Name</label>
          <input type="text" id="first-name" class="form-control" name="first_name" placeholder="John" v-model="guest.firstName">
          <span class="text-danger ms-3 my-2">
            <small v-if="v$.firstName.$errors[0]">{{ v$.firstName.$errors[0].$message }}</small>
          </span>
        </div>

        <div class="col-md-6 my-2">
          <label for="last-name" class="form-label">Last Name</label>
          <input type="text" id="last-name" class="form-control" name="last_name" placeholder="Smith" v-model="guest.lastName">
          <span class="text-danger ms-3 my-2">
            <small v-if="v$.lastName.$errors[0]">{{ v$.lastName.$errors[0].$message }}</small>
          </span>
        </div>

        <div class="col-md-6 my-2">
          <label for="age" class="form-label">Your Age</label>
          <input type="number" id="age" class="form-control" name="age" placeholder="25" v-model="guest.age">
          <span class="text-danger ms-3 my-2">
            <small v-if="v$.age.$errors[0]">{{ v$.age.$errors[0].$message }}</small>
          </span>
        </div>

        <div class="col-md-6 my-2">
          <label for="gender" class="form-label">Gender</label>
          <select id="gender" class="form-select" name="gender" v-model="guest.gender">
            <option disabled value="" selected>Please Select One</option>
            <option value="Ms">Woman</option>
            <option value="Mr">Man</option>
            <option value="Mx">Prefer not to state</option>
          </select>
          <span class="text-danger ms-3 my-2">
            <small v-if="v$.gender.$errors[0]">{{ v$.gender.$errors[0].$message }}</small>
          </span>
        </div>

        <div class="my-2">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" class="form-control" name="email" placeholder="johndoe@gmail.com" v-model.trim="guest.email">
          <span class="text-danger ms-3 my-2">
            <small v-if="v$.email.$errors[0]">{{ v$.email.$errors[0].$message }}</small>
          </span>
        </div>

        <div class="my-2">
          <label for="password" class="form-label">Password</label>
          <input type="password" id="password" class="form-control" name="password" placeholder="**********" v-model.trim="guest.password">
          <span class="text-danger ms-3 my-2">
            <small v-if="v$.password.$errors[0]">{{ v$.password.$errors[0].$message }}</small>
          </span>
        </div>

        <div class="my-4">
          <button type="submit" class="btn btn-primary">add guest</button>
        </div>
      </form>
    </div>
  </div>
</template>