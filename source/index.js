import drawLines from './scripts/drawlines';
import { params } from './scripts/params';
import './index.scss';

var list = drawLines(params);
document.body.innerHTML = list;
var lines = document.getElementsByClassName('line');
for ( let i = 0; i < lines.length; i++) {
	console.log(lines[i].style['background-color']);
	var changeBg = setInterval(function() {
		var childrenList = lines[i].children;
		for ( let j = 0; j < childrenList.length; j++) {
			childrenList[j].style['background-color'] = '#' + (Math.round(Math.random()*16777215)).toString(16);
		}
	}, 2000);
	
		
	
}
