<template>
  <div class="product-detail">
    <!-- 产品概述 -->
    <section class="product-overview">
      <div class="overview-content">
        <h2>{{ t('home.products.chat.name') }}</h2>
        <p class="description">{{ t('home.products.chat.desc') }}</p>
        <button class="consult-btn" @click="handleConsult">{{ t('common.consult') }}</button>
        <button class="experience-btn" @click="handleExperience">{{ t('common.experience') }}</button>
      </div>
      <div class="overview-image">
        <img src="@/assets/products/chat-dashboard.png" alt="客服系统界面" />
      </div>
    </section>

    <!-- 核心功能 -->
    <section class="core-features">
      <h3 class="section-title">{{ t('common.coreFeatures') }}</h3>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-comments"></i>
          </div>
          <div class="feature-content">
            <h4>{{ t('chat.features.multichannel') }}</h4>
            <p>{{ t('chat.features.multichannelDesc') }}</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-robot"></i>
          </div>
          <div class="feature-content">
            <h4>{{ t('chat.features.ai') }}</h4>
            <p>{{ t('chat.features.aiDesc') }}</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-users"></i>
          </div>
          <div class="feature-content">
            <h4>{{ t('chat.features.human') }}</h4>
            <p>{{ t('chat.features.humanDesc') }}</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-chart-bar"></i>
          </div>
          <div class="feature-content">
            <h4>{{ t('chat.features.analysis') }}</h4>
            <p>{{ t('chat.features.analysisDesc') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const router = useRouter();
const { t } = useI18n();

const handleConsult = () => {
  router.push({
    path: "/contact",
    query: { product: "chat" },
  });
};

const handleExperience = () => {
  window.open("https://futrtalk.com", "_blank");
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

.experience-btn {
  padding: 0.8rem 2rem;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  background: transparent;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 1rem;
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

.experience-btn:hover {
  background: rgba(var(--primary-color-rgb), 0.1);
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

  .experience-btn {
    margin-left: 0;
    margin-top: 1rem;
  }
}
</style>
