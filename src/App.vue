<template>
  <div :class="theme">
    <loading-overlay v-if="globalStore.loading" />
    <notification-list :notifications="globalStore.notifications" />
    
    <nav>
      <!-- 导航栏内容 -->
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useAppStore } from './store/modules/app'
import { useGlobalStore } from './store/global'
import { onMounted, computed } from 'vue'

const appStore = useAppStore()
const globalStore = useGlobalStore()

const theme = computed(() => appStore.theme)

onMounted(() => {
  appStore.initTheme()
})
</script>

<style>
#app {
  min-height: 100vh;
}

#app.light {
  background-color: #ffffff;
  color: #1F2937;
}

#app.dark {
  background-color: #1F2937;
  color: #ffffff;
}
</style>
