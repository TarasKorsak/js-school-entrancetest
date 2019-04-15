import drawLines from './scripts/drawlines';
import { params } from './scripts/params';
import './index.scss';

var list = drawLines(params);   //  с помощью этой функции размечаем экран  согласно условию задания. массив исходных данных находится в файле ./scripts/params.js
document.body.innerHTML = list;
var lines = document.getElementsByClassName('line'); 
for ( let i = 0; i < lines.length; i++) {
	let updateTime = lines[i].dataset.updateTime;       // поочередно обращаясь к  каждому блочному элементу  с классом .line, считываем значение временного интервала 
	var changeBg = setInterval(function() {             //функция, которая назначает интервальные изменения фонового цвета элементам линии, но не самой линии (это фича, а не баг)
		var childrenList = lines[i].children;             // получение списка всех дочерних блочных элементов
		for ( let j = 0; j < childrenList.length; j++) {
			childrenList[j].style['background-color'] = '#' + (Math.round(Math.random()*16777215)).toString(16); // переопределение фонового цвета
		}
	}, updateTime);
	
		
	
}
