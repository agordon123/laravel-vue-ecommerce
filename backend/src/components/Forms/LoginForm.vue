<template>

</template>

<script>
import {defineComponent, ref} from "vue";
import useAuthStore from "../../store/AuthStore.js";
import router from "../../router/index.js";
import Dashboard from "../../views/Dashboard.vue";

export default defineComponent({
  setup(){
    const authStore = useAuthStore();
    const email = ref('');
    const password = ref('');

    const handleLogin  = async()=>{
      await authStore.login({email:email.value,},{password:password.value})
      await router.push({name: Dashboard})
    }
  }
})

</script>

<style scoped>

</style>
