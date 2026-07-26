import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

export const router = createRouter({
  // Hash history keeps deep links working on GitHub Pages without a
  // server-side SPA fallback.
  history: createWebHashHistory(),
  routes,
});
