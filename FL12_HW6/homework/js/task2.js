let a = +prompt('Enter value A', '');
let b = +prompt('Enter value B', '');
let c = +prompt('Enter value C', '');

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
    console.log('A triangle must have 3 sides with a positive definite length');
} else if (a + b <= c || c + b <= a || a + c <= b) {
	console.log('Triangle doesn’t exist');
} else if (a === b && b === c && a ===c ){
	console.log('Equilateral triangle');
} else if (a === b || b === c || a === c) {
	console.log('Isosceles triangle');
} else {
	 console.log('Scalene triangle');
}
