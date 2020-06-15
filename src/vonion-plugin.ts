import * as Components from './components';
import _Vue from 'vue';

const VueComponents = Components as Record<string, typeof _Vue>;

export function VOnion(Vue: typeof _Vue): void {
  for (const componentName in VueComponents) {
    const component = VueComponents[componentName];
    Vue.component(componentName, component);
  }
}

export default VOnion;
