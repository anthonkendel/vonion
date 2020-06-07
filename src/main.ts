import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import './styles/main.scss';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      name: 'Button',
      path: '/button',
      component: () => import('./components/button/o-button-demo.vue'),
    },
    {
      name: 'Checkbox',
      path: '/checkbox',
      component: () => import('./components/checkbox/o-checkbox-demo.vue'),
    },
    {
      name: 'Input',
      path: '/input',
      component: () => import('./components/input/o-input-demo.vue'),
    },
    {
      name: 'Radio',
      path: '/radio',
      component: () => import('./components/radio/o-radio-demo.vue'),
    },
    {
      name: 'Select',
      path: '/select',
      component: () => import('./components/select/o-select-demo.vue'),
    },
    {
      name: 'Textarea',
      path: '/textarea',
      component: () => import('./components/textarea/o-textarea-demo.vue'),
    },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
