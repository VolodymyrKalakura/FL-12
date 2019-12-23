
let a = +prompt('Enter value A', '');
let b = +prompt('Enter value B', '');
let c = +prompt('Enter value C', '');

if (isNaN(a) || isNaN(b) || isNaN(c)) {
	console.log ('Invalid input data');
} 

let discr = Math.pow(b, 2) - 4 * a * c;
let sqrtDiscr = Math.sqrt(discr);
let x1 = parseInt((-b - sqrtDiscr) / (2 * a));
let x2 = parseInt((-b + sqrtDiscr) / (2 * a));
if (a === 0) {
	console.log ('Invalid input data');
} else if (discr < 0) {
	console.log ('no solution');
} else if (discr === 0) {
	console.log('x = ' + x1);
} else if (discr > 0){
	console.log (`x1 = ${x1}, x2 = ${x2}`);
}