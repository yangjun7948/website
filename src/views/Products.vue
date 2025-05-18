<template>
  <div class="products-page">
    <!-- 产品页面标题区 -->
    <section class="products-hero">
      <div class="container">
        <h1 class="page-title">{{ t("home.products.title") }}</h1>
        <p class="subtitle">{{ t("home.products.subtitle") }}</p>
      </div>
    </section>

    <!-- 产品导航 -->
    <section class="products-nav">
      <div class="container">
        <div class="nav-tabs">
          <button v-for="product in products" :key="product.key" class="nav-tab" :class="{ active: currentProduct === product.key }" @click="currentProduct = product.key">
            {{ t(`home.products.${product.key}.name`) }}
          </button>
        </div>
      </div>
    </section>

    <!-- 产品内容区域 -->
    <section class="product-content">
      <div class="container">
        <CrmProduct v-if="currentProduct === 'crm'" />
        <WmsProduct v-if="currentProduct === 'wms'" />
        <TraceProduct v-if="currentProduct === 'trace'" />
        <ChatProduct v-if="currentProduct === 'chat'" />
        <EcommerceProduct v-if="currentProduct === 'ecommerce'" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import CrmProduct from '@/components/products/CrmProduct.vue';
import WmsProduct from '@/components/products/WmsProduct.vue';
import TraceProduct from '@/components/products/TraceProduct.vue';
import EcommerceProduct from '@/components/products/EcommerceProduct.vue';
import ChatProduct from '@/components/products/ChatProduct.vue';

const { t } = useI18n();

const route = useRoute();

const products = [{ key: "crm" }, { key: "wms" }, { key: "trace" }, { key: "chat" }, { key: "ecommerce" }];

const currentProduct = ref("crm"); // 默认显示第一个产品

// 根据路由参数设置当前产品
onMounted(() => {
  if (route.query.type) {
    currentProduct.value = route.query.type;
  }
});
</script>

<style scoped>
.products-page {
  padding-bottom: 4rem;
}

.products-hero {
  background: var(--hero-background);
  color: var(--hero-text);
  padding: 4rem 0;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.products-nav {
  background: var(--card-background);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 64px;
  z-index: 10;
}

.nav-tabs {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.nav-tab {
  padding: 0.75rem 1.5rem;
  border: none;
  background: none;
  color: var(--text-secondary);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
}

.nav-tab::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--primary-color);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-tab:hover {
  color: var(--text-primary);
}

.nav-tab.active {
  color: var(--primary-color);
}

.nav-tab.active::after {
  transform: scaleX(1);
}

.product-content {
  padding: 3rem 0;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .products-hero {
    padding: 3rem 0;
  }

  .nav-tabs {
    padding: 0.75rem 0;
  }

  .nav-tab {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
