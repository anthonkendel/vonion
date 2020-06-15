import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import './styles/main.scss';
import VOnion from './vonion-plugin';

/**
 * Component imports
 */
import ButtonDemo from './components/button/o-button-demo.vue';
import CheckboxDemo from './components/checkbox/o-checkbox-demo.vue';
import InputDemo from './components/input/o-input-demo.vue';
import RadioDemo from './components/radio/o-radio-demo.vue';
import SelectDemo from './components/select/o-select-demo.vue';
import TextareaDemo from './components/textarea/o-textarea-demo.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VOnion);

const router = new VueRouter({
  routes: [
    {
      name: 'Button',
      path: '/button',
      component: ButtonDemo,
    },
    {
      name: 'Checkbox',
      path: '/checkbox',
      component: CheckboxDemo,
    },
    {
      name: 'Input',
      path: '/input',
      component: InputDemo,
    },
    {
      name: 'Radio',
      path: '/radio',
      component: RadioDemo,
    },
    {
      name: 'Select',
      path: '/select',
      component: SelectDemo,
    },
    {
      name: 'Textarea',
      path: '/textarea',
      component: TextareaDemo,
    },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
