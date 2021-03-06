
/**
 * Formatter for bytediff to display the size changes after processing
 * @param  {Object} data - byte data
 * @return {String}      Difference in bytes, formatted
 */

'use strict';

var formatPercent = require('../gulp-utils/format-percent.js');

function bytediffFormatter(data) {
	var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
	return data.fileName + ' went from ' +
		(data.startSize / 1000).toFixed(2) + ' kB to ' +
		(data.endSize / 1000).toFixed(2) + ' kB and is ' +
		formatPercent(1 - data.percent, 2) + '%' + difference;
}

module.exports = bytediffFormatter;
