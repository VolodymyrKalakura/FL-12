let a = +prompt('Enter value A', '');
let b = +prompt('Enter value B', '');
let c = +prompt('Enter value C', '');

let output = (isNaN(a) || isNaN(b) || isNaN(c)) ? 'input values should be ONLY numbers' :
		(a <= 0 || b <= 0 || c <= 0) ? 'A triangle must have 3 sides with a positive definite length':
		(a + b <= c || c + b <= a || a + c <= b) ? 'Triangle doesn’t exist' :
		(a === b && b === c && a ===c ) ? 'Equilateral triangle' :
		(a === b || b === c || a === c) ? 'Isosceles triangle' :
		'Scalene triangle';

console.log(output);