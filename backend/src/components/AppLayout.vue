<template>
<div class="min h-full bg-gray-200 flex">
<SideBar :class="{'-ml-[200px]' : !sidebarOpened}" />
  <div class="flex-1">
    <TopHeader @toggle-sidebar="toggleSidebar">
      <main class="p-6">
        <router-view></router-view>
      </main>
      <!-- CONTENT -->
    </TopHeader>
  </div>
</div>

</template>

<script setup>
import TopHeader from "./TopHeader.vue";

const {title} = defineProps({
  title: String
})
</script>

<style scoped>
</style>
