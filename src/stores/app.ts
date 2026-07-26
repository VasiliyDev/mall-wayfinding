import { defineStore } from 'pinia';

export type LocaleCode = 'en' | 'zh';

export const useAppStore = defineStore('app', {
  state: () => ({
    language: (localStorage.getItem('language') as LocaleCode | null) ?? 'en',
  }),
  actions: {
    setLang(language: LocaleCode) {
      this.language = language;
      localStorage.setItem('language', language);
    },
  },
});
