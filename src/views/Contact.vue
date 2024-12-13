<template>
  <div class="contact-page">
    <!-- 联系方式概览 -->
    <section class="contact-overview">
      <div class="container">
        <h1 class="page-title">{{ t("contact.title") }}</h1>
        <p class="subtitle">{{ t("contact.subtitle") }}</p>

        <div class="contact-cards">
          <div class="contact-card">
            <i class="fas fa-phone-alt"></i>
            <h3>{{ t("contact.phone.title") }}</h3>
            <p>{{ t("contact.phone.number") }}</p>
            <p class="note">{{ t("contact.phone.hours") }}</p>
          </div>

          <div class="contact-card">
            <i class="fas fa-envelope"></i>
            <h3>{{ t("contact.email.title") }}</h3>
            <a 
              :href="mailtoLink" 
              class="email-link"
              @click="handleEmailClick"
            >
              {{ t("contact.email.address") }}
            </a>
            <p class="note">{{ t("contact.email.hours") }}</p>
          </div>

          <div class="contact-card">
            <i class="fas fa-comments"></i>
            <h3>{{ t("contact.wechat.title") }}</h3>
            <button class="show-qr-btn" @click="showQRCode = true">
              {{ t("contact.wechat.button") }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 咨询表单 -->
    <section class="contact-form">
      <div class="container">
        <h2 class="section-title">{{ t("contact.form.title") }}</h2>
        <form @submit.prevent="handleSubmit" class="form-container">
          <div class="form-group">
            <label for="name">{{ t("contact.form.name") }}</label>
            <input type="text" id="name" v-model="formData.name" required :placeholder="t('contact.form.name')" />
          </div>

          <div class="form-group">
            <label for="company">{{ t("contact.form.company") }}</label>
            <input type="text" id="company" v-model="formData.company" required :placeholder="t('contact.form.company')" />
          </div>

          <div class="form-group">
            <label for="phone">{{ t("contact.form.phone") }}</label>
            <input type="tel" id="phone" v-model="formData.phone" required :placeholder="t('contact.form.phone')" />
          </div>

          <div class="form-group">
            <label for="email">{{ t("contact.form.email") }}</label>
            <input type="email" id="email" v-model="formData.email" required :placeholder="t('contact.form.email')" />
          </div>

          <div class="form-group full-width">
            <label for="product">{{ t("contact.form.product") }}</label>
            <select id="product" v-model="formData.product" required>
              <option value="">{{ t("contact.form.product") }}</option>
              <option value="crm">{{ t("home.products.crm.name") }}</option>
              <option value="wms">{{ t("home.products.wms.name") }}</option>
              <option value="trace">{{ t("home.products.trace.name") }}</option>
              <option value="service">{{ t("home.products.chat.name") }}</option>
            </select>
          </div>

          <div class="form-group full-width">
            <label for="message">{{ t("contact.form.message") }}</label>
            <textarea id="message" v-model="formData.message" rows="4" required :placeholder="t('contact.form.message')"></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="submitting">
            {{ submitting ? t("contact.form.submitting") : t("contact.form.submit") }}
          </button>
        </form>
      </div>
    </section>

    <!-- 二维码弹窗 -->
    <div class="qrcode-modal" v-if="showQRCode" @click.self="showQRCode = false">
      <div class="qrcode-content">
        <div class="qrcode-header">
          <h3>{{ t("contact.wechat.modal.title") }}</h3>
          <button class="close-btn" @click="showQRCode = false">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="qrcode-body">
          <img src="@/assets/contact/wechat-qr.jpg" alt="企业微信二维码" />
          <p class="qrcode-tip">{{ t("contact.wechat.modal.tip") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useGlobalStore } from "@/store/global";

const { t } = useI18n();
const globalStore = useGlobalStore();
const submitting = ref(false);
const showQRCode = ref(false);

const formData = reactive({
  name: "",
  company: "",
  phone: "",
  email: "",
  product: "",
  message: "",
});

// 构建邮件链接
const mailtoLink = computed(() => {
  const email = t("contact.email.address");
  const subject = encodeURIComponent(t("contact.email.subject"));
  const body = encodeURIComponent(t("contact.email.template"));
  return `mailto:${email}?subject=${subject}&body=${body}`;
});

// 处理邮件点击事件
const handleEmailClick = (event) => {
  // 在移动设备上，如果没有配置邮件客户端，提供复制功能
  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    event.preventDefault();
    const email = t("contact.email.address");
    navigator.clipboard.writeText(email).then(() => {
      // 这里可以添加一个提示，告诉用户邮箱已复制
      alert(t("contact.email.copied"));
    });
  }
};

const handleSubmit = async () => {
  try {
    submitting.value = true;
    // 这里添加表单提交逻辑
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 模拟API请求

    globalStore.addNotification({
      type: "success",
      message: "需求提交成功，我们会尽快与您联系",
      duration: 3000,
    });

    // 重置表单
    Object.keys(formData).forEach((key) => {
      formData[key] = "";
    });
  } catch (error) {
    globalStore.addNotification({
      type: "error",
      message: "提交失败，请稍后重试",
      duration: 3000,
    });
  } finally {
    submitting.value = false;
  }
};
</script>

<style scoped>
.section-title{
  text-align: center;
}
.contact-page {
  padding-bottom: 4rem;
}

.contact-overview {
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
  margin-bottom: 3rem;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.contact-card {
  background: var(--card-background);
  padding: 2rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.contact-card i {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact-card h3 {
  margin-bottom: 0.5rem;
}

.contact-card .note {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 0.5rem;
}

.contact-form {
  padding: 4rem 0;
  background: var(--background-color);
}

.form-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: var(--card-background);
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--shadow-color);
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: span 2;
}

label {
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
}

input,
select,
textarea {
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: var(--background-color);
  color: var(--text-primary);
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--primary-color-alpha);
}

input::placeholder,
select::placeholder,
textarea::placeholder {
  color: var(--text-light);
}

select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
}

.submit-btn {
  grid-column: span 2;
  padding: 1rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: var(--secondary-color);
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.company-location {
  padding: 4rem 0;
}

.location-info {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.address-info {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.address-info h3 {
  margin-bottom: 1rem;
  color: #1f2937;
}

.address-info p {
  margin-bottom: 0.5rem;
  color: #4b5563;
}

.address-info i {
  margin-right: 0.5rem;
  color: #2563eb;
}

.map-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.show-qr-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: var(--primary-color);
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.show-qr-btn:hover {
  background: var(--secondary-color);
}

/* 二维码弹窗样式 */
.qrcode-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.qrcode-content {
  background: var(--card-background);
  border-radius: 8px;
  padding: 1.5rem;
  width: 90%;
  max-width: 360px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: modalFadeIn 0.3s ease;
}

.qrcode-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.qrcode-header h3 {
  margin: 0;
  color: var(--text-primary);
  font-size: 1.25rem;
}

.close-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.25rem;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: var(--text-primary);
}

.qrcode-body {
  text-align: center;
}

.qrcode-body img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.qrcode-tip {
  color: var(--text-light);
  font-size: 0.9rem;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 移动端适配 */
@media (max-width: 768px) {
  .form-container {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }

  .form-group.full-width,
  .submit-btn {
    grid-column: span 1;
  }

  .location-info {
    grid-template-columns: 1fr;
  }

  .map-container {
    height: 300px;
  }

  .qrcode-content {
    width: 85%;
    padding: 1rem;
  }

  .qrcode-body img {
    width: 180px;
    height: 180px;
  }
}

.email-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.email-link:hover {
  text-decoration: underline;
  opacity: 0.9;
}
</style>
