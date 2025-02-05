<template>
  <div class="product-detail">
    <!-- 产品概述 -->
    <section class="product-overview">
      <div class="overview-content">
        <h2>出海电商解决方案</h2>
        <p class="description">专业的跨境电商一站式解决方案，提供模板开发、插件定制、SEO优化等服务，助力企业快速打造品牌独立站。</p>
        <button class="consult-btn" @click="handleConsult">立即咨询</button>
      </div>
      <div class="overview-image">
        <img src="@/assets/products/ecommerce-dashboard.jpg" alt="独立站展示" />
      </div>
    </section>

    <!-- 核心功能 -->
    <section class="core-features">
      <h3 class="section-title">核心服务</h3>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-paint-brush"></i>
          </div>
          <div class="feature-content">
            <h4>独立站模板开发</h4>
            <p>专业团队定制开发，确保网站性能和用户体验</p>
            <ul class="feature-list">
              <li>响应式设计</li>
              <li>性能优化</li>
              <li>用户体验优化</li>
            </ul>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-puzzle-piece"></i>
          </div>
          <div class="feature-content">
            <h4>插件定制开发</h4>
            <p>根据业务需求定制开发插件，扩展网站功能</p>
            <ul class="feature-list">
              <li>支付集成</li>
              <li>营销工具</li>
              <li>数据分析</li>
            </ul>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-search"></i>
          </div>
          <div class="feature-content">
            <h4>SEO优化服务</h4>
            <p>专业的SEO优化方案，提升网站搜索排名</p>
            <ul class="feature-list">
              <li>技术SEO优化</li>
              <li>内容SEO优化</li>
              <li>外链建设</li>
            </ul>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-globe"></i>
          </div>
          <div class="feature-content">
            <h4>多语言多币种</h4>
            <p>支持多语言多币种，轻松开拓全球市场</p>
            <ul class="feature-list">
              <li>多语言支持</li>
              <li>多币种结算</li>
              <li>汇率自动更新</li>
            </ul>
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
    query: { product: "ecommerce" },
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

.section-title {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--text-primary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--card-background);
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--shadow-color);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.feature-icon {
  font-size: 1.5rem;
  color: var(--primary-color);
  padding: 1rem;
  background: var(--surface-color);
  border-radius: 8px;
}

.feature-content h4 {
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.feature-content p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.advantage-points {
  list-style: none;
  padding: 0;
}

.advantage-points li {
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
}

.advantage-points li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-color);
}

.advantage-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--shadow-color);
}

@media (max-width: 768px) {
  .product-overview {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .overview-content h2 {
    font-size: 1.75rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .feature-icon {
    margin-bottom: 1rem;
  }
}
</style> 