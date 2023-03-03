<template>
    <AppLayout>
      <h1>Dashboard</h1>

    </AppLayout>
</template>
<script setup>
import {ref,computed,onMounted,onUnmounted} from "vue";
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/core/Spinner.vue";
import Toast from "../components/core/Toast.vue";
import useAuthStore from "../store/AuthStore.js";
const {title} = defineProps({
  title:String,
})
const sidebarOpened = ref(true);
const currentUser = computed(()=>useAuthStore().fetchUser())

function toggleSidebar(){
  sidebarOpened.value = !sidebarOpened.value;
}
function updateSidebarState(){
  sidebarOpened.value = window.outerWidth > 768;
}
onMounted(()=>{
  useAuthStore().fetchUser()
  updateSidebarState();
  window.addEventListener('resize',updateSidebarState)
})
onUnmounted(()=>{
  window.removeEventListener('resize',updateSidebarState)
})
</script>


<style scoped>
</style>
