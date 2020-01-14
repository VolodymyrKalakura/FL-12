function convert(...args) {
    for (let i = 0; i < args.length; i++) {
        typeof args[i] === 'string' ? args[i] = +args[i] : args[i] = args[i] + '';
    }
    return [...args];
 }

function executeforEach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
    return arr;
 }

function mapArray(arr, cb) {
    let newArray = [];
    executeforEach(arr, function(el) {
        newArray.push(cb(+el));
    });   
    return newArray;
}

function filterArray(arr, cb) {
    let newArray = [];
    executeforEach(arr, function(el) {
        if(cb(el)){
            newArray.push(el);
        }
    }); 
    return newArray;
}

function flipOver(str) {
    let reversed = '';
    for(let char of str){
    reversed = char + reversed;
  }
  return reversed;
}

function makeListFromRange(arr) {
    let newArray = [];
    for (let i = arr[0]; i <= arr[arr.length-1]; i++) {
        newArray.push(i);
    }
    return newArray;
}

function getArrayOfKeys(arr, value) {
    let newArray = []; 
    executeforEach(arr, function(el){
        newArray.push(el[value]);
    })
    return newArray;
}

function substitute(arr) {
	return mapArray(arr, function(el) {
		return el < 30 ? '*' : el; 
	})
}

function getPastDay(date, days) {
	const dateTime = date.getTime();
	const daysTime = days * 24 * 3600000;
	const result = new Date(dateTime - daysTime);
	return result.getDate();
}

function formatDate(date) {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const d = date.getDate();
	const t = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
	const s = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	const result = `${year}/${month}/${d} ${t}:${s}`;
	return result;
}