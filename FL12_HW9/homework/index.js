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

// function getArrayOfKeys(obj, name) {
//     let newArray = [];
//     executeforEach(obj, function(name){
//         newArray.push(obj[name]))}
//     return newArray;
// }
// const actors = [
//     { name: 'tommy', age: 36 },
//     { name: 'lee', age: 28 }
//   ];
  
// console.log(getArrayOfKeys(actors, 'name'));