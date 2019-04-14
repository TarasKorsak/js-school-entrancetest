import drawLines from './drawlines';
import { params } from './params';

var list = drawLines(params);
console.log(list);
document.body.innerHTML = list;
