
let a = +prompt('Enter value A', '');
let b = +prompt('Enter value B', '');
let c = +prompt('Enter value C', '');
let discr = Math.pow(b, 2) - 4 * a * c;
let sqrtDiscr = Math.sqrt(discr);
let x1 = parseInt((-b - sqrtDiscr) / (2 * a));
let x2 = parseInt((-b + sqrtDiscr) / (2 * a));

let output = (a === 0) ? 'Invalid input data' :
				(discr < 0) ? 'no solution' :
				(discr === 0) ? 'x = ' + x1 :
				`x1 = ${x1}, x2 = ${x2}`;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
	console.log ('Invalid input data');
} else {
	console.log(output);
}