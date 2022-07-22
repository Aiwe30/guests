<script setup>
import HeaderLayout from './views/layout/HeaderLayout.vue';
import SideBarLayout from './views/layout/SideBarLayout.vue';
import FooterLayout from './views/layout/FooterLayot.vue';
</script>
<template>
  <HeaderLayout />
  <div class="container-fluid mt-5">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 p-0 border-end bg-light">
        <div class="pt-2 text-white min-vh-100">
          <div class="mt-5">
            <SideBarLayout />
          </div>
        </div>
      </div>
      <div class="col py-3">
        <div class="mt-5">
          <router-view :key='$route.fullPath'></router-view>
        </div>
      </div>
    </div>
  </div>
  <FooterLayout />
</template>
