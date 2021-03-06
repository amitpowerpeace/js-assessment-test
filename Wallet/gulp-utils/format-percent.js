/**
 * Format a number as a percentage
 * @param  {Number} num       Number to format as a percent
 * @param  {Number} precision Precision of the decimal
 * @return {String}           Formatted perentage
 */

'use strict';

function formatPercent(num, precision) {
	return (num * 100).toFixed(precision);
}

module.exports = formatPercent;
