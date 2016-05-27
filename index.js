'use strict';

function sumAll(arr) {
	let total = 0;
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	console.log(min, max);
	for (let i = min; i <= max; i++) {
		total += i;
	}

	return total;
}

console.log(sumAll([1, 4]));
