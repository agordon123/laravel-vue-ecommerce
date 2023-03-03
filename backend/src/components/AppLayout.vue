<template>
<div v-if="currentUser.id" class="min h-full bg-gray-200 flex">
<Sidebar :class="{'-ml-[200px]' : !sidebarOpened}" />
  <div class="flex-1">
    <Navbar @toggle-sidebar="toggleSidebar"></Navbar>
      <main class="p-6">
        <router-view></router-view>
      </main>
      <!-- CONTENT -->

  </div>
</div>
<div v-else class="min-h-full bg-gray-200 flex items-center justify-center">
  <Spinner />
</div>
  <Toast />
</template>

<script setup>
import {ref, computed, onMounted, onUnmounted} from "vue";
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
import store from "../store/index.js";
import Spinner from './core/Spinner.vue';
import Toast from './core/Toast.vue';
import useUserStore from "../store/UserStore.js";

const {title} = defineProps({
  title: String
})
const sidebarOpened = ref(true);
const currentUser = computed(()=>useUserStore().user);
function toggleSidebar(){
  sidebarOpened.value = !sidebarOpened.value
}
function updateSidebarState(){
  sidebarOpened.value = window.outerWidth > 768
}
onMounted(()=>{
  store.dispatch('getCurrentUser')
  store.dispatch('getCountries')
  updateSidebarState();
  window.addEventListener('resize',updateSidebarState);

})
onUnmounted(()=>{
  window.removeEventListener('resize',updateSidebarState)
})
</script>

<style scoped>
</style>
