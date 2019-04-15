export default function (array) {

	var linesList = '';
	const linesAmount = array.lines.length;
	const lineHeight = 100/linesAmount + "vh";

	for (var i = 0; i < linesAmount; i++) {
		// shame on me, it should be template string... babel installed but doesn't work... I'm trying to guess why(((
		linesList += '<div class="line" style="background-color: ' + array.lines[i].background + '; width: 100%; height: ' + lineHeight + '" data-update-time="' + array.lines[i].updateTime + '">';
		for (var j = 0; j < array.lines[i].elements.length; j++) {
			linesList += '<div style="background-color: ' + array.lines[i].elements[j].background + '; width: ' + array.lines[i].elements[j].width + '%; height: 100%"></div>';
		}
		linesList += '</div>';
	}
	
	return linesList;
}