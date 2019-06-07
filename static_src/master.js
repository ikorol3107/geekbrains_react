import './styles/styles.css';
import double_f from './slave';
import { triple_f } from './slave';
//import { draw_html } from './slave';

const n = 10;
console.log(n + ' * 2 = ', double_f(n));
console.log(n + ' * 3 = ', triple_f(n));
//draw_html();