<template>
  <div class="product-detail">
    <!-- 产品概述 -->
    <section class="product-overview">
      <div class="overview-content">
        <h2>溯源管理平台</h2>
        <p class="description">专业的产品溯源管理平台，支持产品全生命周期追踪，确保产品质量可追溯、可查证、可追责。</p>
        <button class="consult-btn" @click="handleConsult">立即咨询</button>
      </div>
      <div class="overview-image">
        <img src="@/assets/products/trace-dashboard.jpg" alt="溯源平台界面" />
      </div>
    </section>

    <!-- 产品展示 -->
    <section class="product-showcase">
      <div class="showcase-layout">
        <div class="showcase-item mobile">
          <img src="@/assets/products/trace-mobile.jpg" alt="移动端溯源" />
          <p>移动端溯源查询</p>
        </div>
        <div class="showcase-horizontal">
          <div class="showcase-item">
            <img src="@/assets/products/trace-code.jpg" alt="溯源码管理" />
            <p>溯源码管理</p>
          </div>
          <div class="showcase-item">
            <img src="@/assets/products/trace-report.jpg" alt="统计分析" />
            <p>数据统计分析</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleConsult = () => {
  router.push({
    path: "/contact",
    query: { product: "trace" },
  });
};
</script>

<style scoped>
.product-detail {
  padding: 2rem 0;
}

.product-overview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
}

.overview-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.consult-btn {
  padding: 0.8rem 2rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.consult-btn:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
}

.overview-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--shadow-color);
}

.showcase-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.showcase-horizontal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.showcase-item {
  text-align: center;
}

.showcase-item.mobile {
  height: 100%;
}

.showcase-item.mobile img {
  height: 500px;
  object-fit: cover;
}

.showcase-item img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--shadow-color);
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.showcase-item img:hover {
  transform: translateY(-4px);
}

.showcase-item p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .product-overview {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .overview-content h2 {
    font-size: 1.75rem;
  }

  .showcase-layout {
    grid-template-columns: 1fr;
  }

  .showcase-horizontal {
    grid-template-columns: 1fr;
  }

  .showcase-item.mobile img {
    height: auto;
    max-height: 500px;
    width: 100%;
  }
}
</style>
