<template>
  <div class="product-detail">
    <!-- 产品概述 -->
    <section class="product-overview">
      <div class="overview-content">
        <h2>WMS仓储管理系统</h2>
        <p class="description">专业的仓储管理系统，支持多仓库管理、移动端扫码、库存追溯、智能调拨、多维度报表分析，助力企业提升仓储管理效率。</p>
        <button class="consult-btn" @click="handleConsult">立即咨询</button>
      </div>
      <div class="overview-image">
        <img src="@/assets/products/wms-dashboard.jpg" alt="WMS系统界面" />
      </div>
    </section>

    <!-- 核心特点 -->
    <section class="core-features">
      <h3 class="section-title">核心特点</h3>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-warehouse"></i>
          </div>
          <div class="feature-content">
            <h4>出入库管理</h4>
            <p>支持多种出入库业务场景，流程规范化，操作简单高效</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-exchange-alt"></i>
          </div>
          <div class="feature-content">
            <h4>调拨管理</h4>
            <p>多仓库之间物品调拨，库存调配更灵活，支持批量操作</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-clipboard-list"></i>
          </div>
          <div class="feature-content">
            <h4>要货管理</h4>
            <p>支持在线要货申请，审批流程规范，库存补给及时</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-qrcode"></i>
          </div>
          <div class="feature-content">
            <h4>移动端扫码</h4>
            <p>支持手机扫码出入库，物品溯源，提升作业效率</p>
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
            <h4>出入库管理</h4>
            <p>规范化的出入库流程管理</p>
            <ul class="advantage-points">
              <li>支持多种出入库类型</li>
              <li>条码扫描快速操作</li>
              <li>出入库记录可追溯</li>
            </ul>
          </div>
          <div class="advantage-image">
            <img src="@/assets/products/wms-inout.jpg" alt="出入库管理" />
          </div>
        </div>

        <div class="advantage-item">
          <div class="advantage-content">
            <h4>调拨要货管理</h4>
            <p>灵活的库存调配机制</p>
            <ul class="advantage-points">
              <li>多仓库调拨管理</li>
              <li>在线要货申请审批</li>
              <li>库存调配实时同步</li>
            </ul>
          </div>
          <div class="advantage-image">
            <img src="@/assets/products/wms-transfer.jpg" alt="调拨管理" />
          </div>
        </div>

        <div class="advantage-item">
          <div class="advantage-content">
            <h4>多维度报表</h4>
            <p>全方位的数据分析报表</p>
            <ul class="advantage-points">
              <li>库存周转率分析</li>
              <li>出入库统计报表</li>
              <li>库存预警分析</li>
            </ul>
          </div>
          <div class="advantage-image">
            <img src="@/assets/products/wms-report.jpg" alt="报表分析" />
          </div>
        </div>

        <div class="advantage-item">
          <div class="advantage-content">
            <h4>移动端溯源</h4>
            <p>便捷的移动端操作体验</p>
            <ul class="advantage-points">
              <li>扫码出入库操作</li>
              <li>物品溯源追踪</li>
              <li>库存实时查询</li>
            </ul>
          </div>
          <div class="advantage-image">
            <img src="@/assets/products/wms-mobile.jpg" alt="移动端" />
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
    query: { product: "wms" },
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
