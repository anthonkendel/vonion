import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import './styles/main.scss';
import VOnion from './vonion-plugin';

/**
 * Component imports
 */
import ButtonDemo from './components/button/o-button-demo.vue';
import CrateDemo from './components/crate/o-crate-demo.vue';
import CheckboxDemo from './components/checkbox/o-checkbox-demo.vue';
import InputDemo from './components/input/o-input-demo.vue';
import RadioDemo from './components/radio/o-radio-demo.vue';
import SelectDemo from './components/select/o-select-demo.vue';
import TextareaDemo from './components/textarea/o-textarea-demo.vue';
import ElementDemo from './components/element/o-element-demo.vue';
import FieldsetDemo from './components/fieldset/o-fieldset-demo.vue';
import LabelDemo from './components/label/o-label-demo.vue';
import LegendDemo from './components/legend/o-legend-demo.vue';

import Examples from './examples/examples.vue';
import FormExample from './examples/form-example/form-example.vue';

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
      name: 'Crate',
      path: '/crate',
      component: CrateDemo,
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
    {
      name: 'Element',
      path: '/element',
      component: ElementDemo,
    },
    {
      name: 'Fieldset',
      path: '/fieldset',
      component: FieldsetDemo,
    },
    {
      name: 'Label',
      path: '/label',
      component: LabelDemo,
    },
    {
      name: 'Legend',
      path: '/legend',
      component: LegendDemo,
    },
    {
      name: 'Examples',
      path: '/examples',
      component: Examples,
      children: [
        {
          name: 'FormExample',
          path: 'form-example',
          component: FormExample,
        },
      ],
    },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
