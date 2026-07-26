import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import zh from '@/locales/zh.json';

export const i18n = createI18n({
  legacy: true,
  allowComposition: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, zh },
});
