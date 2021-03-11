/////////////////////////////
//Array.prototype.reverse()//
////////////////////////////

console.log('Array.prototype.reverse()')

//配列の順序を反転させる
const a = [1, 2, 3];

console.log(a); // [1, 2, 3]
a.reverse();
console.log(a); // [3, 2, 1]


////////////////////////////
//Array.prototype.filter()//
////////////////////////////

console.log('Array.prototype.filter()')

//与えられた関数の条件にマッチした物だけで新しい配列を作る
//let newArray = arr.filter(callback(element[, index, [array]])[, thisArg])
// index, array, thisArg は省略可能。要素の位置、メソッドが実行されている配列、コールバックを実行するときのthisの値

function isBigEnough(value) {
  return value >= 10
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
console.log(filtered)  // filtered は [12, 130, 44]



const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
/**
 * Filter array items based on search criteria (query)
 */
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes'] //配列の中で「ap」を持つ要素
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']　//配列の中で「an」を持つ要素


//////////////////////////
//Array.prototype.fill()//
//////////////////////////

console.log('Array.prototype.fill()')

//開始インデックスから終了インデックスまで（デフォルトはlengthの値)まで指定した数値に変更する
//arr.fill(value[, start[, end]])
//start: 開始するインデックス end: 終了するインデックス。どちらも省略可能
//startが負の値 -> array.length + start
//end が負 -> array.length + end

const arrN = [1, 2, 3]

console.log(arrN.fill(4))                // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1))             // [1, 4, 4] 2番目から全て4に
console.log([1, 2, 3].fill(4, 1, 2))          // [1, 4, 3]　２番目から３番目の前まで

// A single object, referenced by each slot of the array:
let arr = Array(3).fill({}) // [{}, {}, {}]
arr[0].hi = "hi"            // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
console.log(arr)

console.log([1, 2, 3].fill(4, 1, 2))          // [1, 4, 3])