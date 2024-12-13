<template>
  <div class="home">
    <!-- Hero Section -->
    <header class="hero">
      <div class="hero-content">
        <h1>{{ t('home.hero.title') }}</h1>
        <p class="subtitle">{{ t('home.hero.subtitle') }}</p>
        <div class="cta-buttons">
          <button class="primary-btn" @click="handleConsult">
            {{ t('home.hero.cta.consult') }}
          </button>
          <a href="#products" class="secondary-btn">
            {{ t('home.hero.cta.products') }}
          </a>
        </div>
      </div>
    </header>

    <!-- 核心优势 -->
    <section class="features">
      <h2 class="section-title">{{ t('home.features.title') }}</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.id" class="feature-card">
          <div class="feature-icon">
            <i :class="feature.icon"></i>
          </div>
          <h3>{{ t(`home.features.items.${feature.id}.title`) }}</h3>
          <p>{{ t(`home.features.items.${feature.id}.description`) }}</p>
        </div>
      </div>
    </section>

    <!-- 产品展示 -->
    <section id="products" class="products">
      <h2 class="section-title">{{ t('home.products.title') }}</h2>
      <div class="products-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.image" :alt="t(`home.products.${product.key}.name`)" />
          <div class="product-content">
            <h3>{{ t(`home.products.${product.key}.name`) }}</h3>
            <p>{{ t(`home.products.${product.key}.desc`) }}</p>
            <ul class="feature-list">
              <li v-for="(feature, index) in product.features" :key="index">
                {{ t(`home.products.${product.key}.features.${index}`) }}
              </li>
            </ul>
            <router-link :to="product.link" class="learn-more">
              {{ t('home.products.learnMore') }} →
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务流程 -->
    <section class="process">
      <h2 class="section-title">{{ t('home.process.title') }}</h2>
      <div class="process-grid">
        <div v-for="step in process" :key="step.id" class="process-card">
          <div class="step-number">{{ step.id }}</div>
          <h3>{{ t(`home.process.steps.${step.id}.title`) }}</h3>
          <p>{{ t(`home.process.steps.${step.id}.description`) }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import crmImage from '@/assets/home/crm.jpg'
import wmsImage from '@/assets/home/wms.jpg'
import traceImage from '@/assets/home/trace.jpg'
import chatImage from '@/assets/home/chat.jpg'

const router = useRouter();
const { t } = useI18n();

const features = ref([
  {
    id: 1,
    icon: "fas fa-code",
  },
  {
    id: 2,
    icon: "fas fa-tasks",
  },
  {
    id: 3,
    icon: "fas fa-users",
  },
  {
    id: 4,
    icon: "fas fa-headset",
  },
]);

const products = ref([
  {
    id: 1,
    key: 'crm',
    image: crmImage,
    features: [0, 1, 2, 3, 4],
    link: "/products/crm",
  },
  {
    id: 2,
    key: 'wms',
    image: wmsImage,
    features: [0, 1, 2, 3, 4],
    link: "/products/wms",
  },
  {
    id: 3,
    key: 'trace',
    image: traceImage,
    features: [0, 1, 2, 3, 4],
    link: "/products/trace",
  },
  {
    id: 4,
    key: 'chat',
    image: chatImage,
    features: [0, 1, 2, 3, 4],
    link: "/products/chat",
  },
]);

const process = ref([
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
]);

const handleConsult = () => {
  router.push("/contact");
};
</script>

<style scoped>
.home {
  width: 100%;
}

.hero {
  min-height: 60vh;
  display: flex;
  align-items: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin: 4rem 0 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  background: var(--card-background);
  box-shadow: 0 4px 6px var(--shadow-color);
  transition: transform 0.3s ease;
  color: var(--text-primary);
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.product-card {
  border-radius: 8px;
  overflow: hidden;
  background: var(--card-background);
  box-shadow: 0 4px 6px var(--shadow-color);
  transition: transform 0.3s ease;
  color: var(--text-primary);
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-content {
  padding: 1.5rem;
  color: var(--text-primary);
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.feature-list li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.feature-list li::before {
  content: "✓";
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.process-card {
  text-align: center;
  padding: 2rem;
  position: relative;
  color: var(--text-primary);
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-weight: bold;
}

.case-type {
  color: #2563eb;
  font-weight: 500;
  margin: 0.5rem 0;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.case-card {
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  background: var(--card-background);
  box-shadow: 0 4px 6px var(--shadow-color);
  color: var(--text-primary);
}

.case-card img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.primary-btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  text-decoration: none;
}

.primary-btn:hover {
  background: var(--secondary-color);
}

.learn-more {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
}

.learn-more:hover {
  text-decoration: underline;
}

.secondary-btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: transparent;
  color: var(--hero-text);
  border: 2px solid var(--hero-text);
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  margin-left: 1rem;
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .secondary-btn {
    margin-left: 0;
  }
}
</style>
