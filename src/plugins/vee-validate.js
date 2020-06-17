import Vue from 'vue';
import { ValidationProvider, extend, setInteractionMode, localize } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import es from 'vee-validate/dist/locale/es.json';
 
for (let rule in rules) {
  // add the rule
  extend(rule, rules[rule]);
}
 
localize('es', es);
setInteractionMode('lazy'); // Para que la validación salte al abandonar el campo
 
// Register it globally
Vue.component('ValidationProvider', ValidationProvider);