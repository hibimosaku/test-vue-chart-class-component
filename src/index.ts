import Vue from 'vue';
import { App } from './App.component';


document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#entry-point',
    render: h => h(App),
  });
});
