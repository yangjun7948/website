<template>
  <div class="product-detail">
    <!-- 产品概述 -->
    <section class="product-overview">
      <div class="overview-content">
        <h2>CRM客户管理系统</h2>
        <p class="description">专注于直播销售行业的CRM系统，提供本地化部署方案，确保数据安全可控，支持多渠道线索对接，全流程销售跟进，助力企业提升销售效率。</p>
        <button class="consult-btn" @click="handleConsult">立即咨询</button>
      </div>
      <div class="overview-image">
        <img src="@/assets/products/crm-dashboard.png" alt="CRM系统界面" />
      </div>
    </section>

    <!-- 核心特点 -->
    <section class="core-features">
      <h3 class="section-title">核心特点</h3>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-server"></i>
          </div>
          <div class="feature-content">
            <h4>本地化部署</h4>
            <p>支持私有化部署，数据存储更安全可控，满足企业数据安全需求</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-bolt"></i>
          </div>
          <div class="feature-content">
            <h4>线索实时对接</h4>
            <p>支持多渠道线索自动采集，实时分配，提升销售转化效率</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-route"></i>
          </div>
          <div class="feature-content">
            <h4>全流程追溯</h4>
            <p>客户跟进全过程记录，销售行为可追溯，管理更透明</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-phone-alt"></i>
          </div>
          <div class="feature-content">
            <h4>多线路对接</h4>
            <p>支持多种呼叫系统对接，统一管理，提升通话效率</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 功能优势 -->
    <section class="advantages">
      <h3 class="section-title">功能优势</h3>
      <div class="advantages-grid">
        <div class="advantage-item">
          <div class="advantage-content">
            <h4>数据安全可控</h4>
            <p>私有化部署，确保数据安全</p>
            <ul class="advantage-points">
              <li>支持私有化部署，数据存储更安全</li>
              <li>完善的权限管理，数据访问可控</li>
              <li>定期数据备份，确保数据安全</li>
            </ul>
          </div>
          <div class="advantage-image">
            <img src="@/assets/products/crm-deploy.jpg" alt="数据安全" />
          </div>
        </div>

        <div class="advantage-item">
          <div class="advantage-content">
            <h4>线索管理智能化</h4>
            <p>自动化线索获取和分配</p>
            <ul class="advantage-points">
              <li>多渠道线索自动采集</li>
              <li>智能线索分配规则</li>
              <li>线索质量智能评估</li>
            </ul>
          </div>
          <div class="advantage-image">
            <img src="@/assets/products/crm-leads.png" alt="线索管理" />
          </div>
        </div>

        <div class="advantage-item">
          <div class="advantage-content">
            <h4>销售过程可追溯</h4>
            <p>完整的销售过程记录</p>
            <ul class="advantage-points">
              <li>客户跟进记录全覆盖</li>
              <li>销售行为数据分析</li>
              <li>业绩目标完成度追踪</li>
            </ul>
          </div>
          <div class="advantage-image">
            <img src="@/assets/products/crm-trace.jpg" alt="过程追溯" />
          </div>
        </div>

        <div class="advantage-item">
          <div class="advantage-content">
            <h4>呼叫系统无缝对接</h4>
            <p>支持多种呼叫系统集成</p>
            <ul class="advantage-points">
              <li>支持主流呼叫系统对接</li>
              <li>通话记录自动同步</li>
              <li>呼叫效率数据分析</li>
            </ul>
          </div>
          <div class="advantage-image">
            <img src="@/assets/products/crm-call.jpg" alt="呼叫系统" />
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
    query: { product: "crm" },
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
}

.advantages-grid {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.advantage-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.advantage-item:nth-child(even) {
  direction: rtl;
}

.advantage-content {
  direction: ltr;
}

.advantage-content h4 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.advantage-content p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
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
  .product-overview,
  .advantage-item {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .advantage-item:nth-child(even) {
    direction: ltr;
  }

  .overview-content h2 {
    font-size: 1.75rem;
  }

  .section-title {
    font-size: 1.5rem;
  }
}
</style>
