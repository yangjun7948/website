<template>
  <div class="layout">
    <!-- 顶部导航 -->
    <header class="header">
      <nav class="nav-container">
        <router-link to="/" class="logo">
          <img :src="isDarkTheme ? logoDark : logoText" :alt="t('nav.logo')" />
        </router-link>

        <!-- 桌面端导航链接 -->
        <div class="nav-links" :class="{ desktop: isMobile }">
          <router-link to="/" class="nav-link" :class="{ active: isHomePage }">
            {{ t("nav.home") }}
          </router-link>
          <router-link to="/products" class="nav-link" :class="{ active: isProductsPage }">
            {{ t("nav.products") }}
          </router-link>
          <router-link to="/contact" class="nav-link" :class="{ active: isContactPage }">
            {{ t("nav.contact") }}
          </router-link>
        </div>

        <div class="nav-right">
          <div class="nav-controls">
            <ThemeToggle />
            <LangToggle />
          </div>
          <button class="contact-btn" :class="{ desktop: isMobile }" @click="handleContact">
            {{ t("nav.contact") }}
          </button>
          <!-- 只在移动端显示汉堡菜单 -->
          <button v-if="isMobile" class="menu-btn" @click="toggleMenu" :aria-label="t('nav.menu')">
            <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
          </button>
        </div>
      </nav>

      <!-- 移动端导航菜单 -->
      <div v-if="isMobile" class="mobile-nav" :class="{ 'is-open': isMenuOpen }">
        <div class="mobile-nav-content">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path" 
            class="mobile-nav-link"
            :class="{ active: isActivePage(link.path) }"
            @click="closeMenu"
          >
            {{ t(link.title) }}
          </router-link>
          <button class="contact-btn mobile" @click="handleContactMobile">
            {{ t("nav.contact") }}
          </button>
        </div>
      </div>
    </header>

    <!-- 主要内容 -->
    <main class="main-content">
      <router-view></router-view>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ t("footer.contact.title") }}</h3>
          <p>{{ t("contact.phone.title") }}: {{ t("contact.phone.number") }}</p>
          <p>{{ t("contact.email.title") }}: yangjun7948@163.com</p>
          <p>{{ t("footer.contact.address") }}</p>
        </div>
        <div class="footer-section">
          <h3>{{ t("footer.links.title") }}</h3>
          <router-link to="/products">{{ t("nav.products") }}</router-link>
          <router-link to="/contact">{{ t("nav.contact") }}</router-link>
        </div>
        <div class="footer-section">
          <h3>{{ t("footer.social.title") }}</h3>
          <div class="social-links">
            <a href="#" target="_blank">{{ t("footer.social.wechat") }}</a>
            <a href="#" target="_blank">{{ t("footer.social.zhihu") }}</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>{{ t("footer.copyright") }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from 'vue-router';
import ThemeToggle from "@/components/ThemeToggle.vue";
import LangToggle from "@/components/LangToggle.vue";
// 导入logo图片
import logoDark from '@/assets/logo-dark.png';
import logoText from '@/assets/logo-text.png';

const router = useRouter();
const { t } = useI18n();
const isDarkTheme = ref(false);
const isMenuOpen = ref(false);
const isMobile = ref(false);

const navLinks = [
  { path: "/", title: "nav.home" },
  { path: "/products", title: "nav.products" },
  { path: "/contact", title: "nav.contact" },
];

const route = useRoute();

// 计算当前页面
const isHomePage = computed(() => route.path === '/');
const isProductsPage = computed(() => route.path.startsWith('/products'));
const isContactPage = computed(() => route.path.startsWith('/contact'));

// 用于移动端菜单的活动页面判断
const isActivePage = (path) => {
  if (path === '/') {
    return isHomePage.value;
  }
  return route.path.startsWith(path);
};

// 监听主题变化
const updateThemeState = () => {
  isDarkTheme.value = document.documentElement.classList.contains('dark');
};

// 检查是否为移动端
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
  if (!isMobile.value) {
    closeMenu();
  }
};

// 监听窗口大小变化和主题变化
onMounted(() => {
  // 初始化主题状态
  updateThemeState();
  checkMobile();

  // 监听窗口大小变化
  window.addEventListener("resize", checkMobile);
  
  // ��听路由变化
  router.afterEach(() => {
    closeMenu();
  });

  // 监听主题变化
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        updateThemeState();
      }
    });
  });

  // 开始观察
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
  document.body.style.overflow = "";
});

const toggleMenu = () => {
  if (!isMobile.value) return;
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? "hidden" : "";
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = "";
};

const handleContactMobile = () => {
  closeMenu();
  handleContact();
};

const handleContact = () => {
  router.push("/contact");
};
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--background-color);
  box-shadow: 0 2px 4px var(--shadow-color);
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo img {
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active {
  color: var(--primary-color);
}

.nav-link.active::after {
  width: 100%;
}

.contact-btn {
  padding: 0.5rem 1.5rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.contact-btn:hover {
  background: var(--secondary-color);
}

.main-content {
  flex: 1;
  margin-top: 72px; /* header height */
}

.footer {
  background: var(--surface-color);
  color: var(--text-primary);
  padding: 4rem 2rem 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-section a {
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: var(--primary-color);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.footer-bottom {
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
  color: var(--text-light);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .main-content {
    margin-top: 64px;
  }
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.locale-select {
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: var(--background-color);
  color: var(--text-primary);
  cursor: pointer;
  min-width: 100px;
  font-size: 0.9rem;
}

.locale-select:focus {
  outline: none;
  border-color: var(--primary-color);
}

@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
  }

  .nav-links {
    display: none;
  }

  .nav-right {
    gap: 1rem;
  }

  .nav-controls {
    gap: 0.25rem;
  }

  .locale-select {
    min-width: 80px;
    padding: 0.4rem;
  }

  .contact-btn {
    padding: 0.4rem 1rem;
    font-size: 0.9rem;
  }
}

/* 移动端样式 */
.mobile {
  display: none;
}

.menu-btn {
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-nav {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--background-color);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 99;
}

.mobile-nav.is-open {
  transform: translateX(0);
}

.mobile-nav-content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-nav-link {
  padding: 1rem;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 4px;
  position: relative;
  padding-left: 1.5rem;
}

.mobile-nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 0;
  background: var(--primary-color);
  transition: height 0.3s ease;
}

.mobile-nav-link:hover::before,
.mobile-nav-link.active::before {
  height: 70%;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: var(--primary-color);
  background: var(--surface-color);
}

@media (max-width: 768px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: flex;
  }

  .nav-container {
    padding: 0.75rem 1rem;
  }

  .logo img {
    height: 32px;
  }

  .nav-right {
    gap: 0.75rem;
  }
}
</style>
