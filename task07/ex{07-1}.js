'use strict'

const str = 'This is a pen.'

///////////////////////////////
//String.prototype.endsWith()//
///////////////////////////////

console.log('String.prototype.endsWith()')

//文字列が引数で指定された文字列で終わるかどうかを判定し、真偽値で返す。
//str.endsWith(searchString[, length])
// length は省略可能。strの文字列の長さ。規定値はstr.length。
//lengthの数値を文字列の長さにするため、途中の数値を指定すると、そこが文字列の終了点と判断される。

console.log(str.endsWith('pen.')) //true
console.log(str.endsWith('.')) //true
console.log(str.endsWith('is')) //false
console.log(str.endsWith('is', 7)) //true


////////////////////////////////
//String.prototype.includes()//
///////////////////////////////

console.log('String.prototype.includes()')

//文字列が含まれているかどうかを判定し。真偽値で返す。
//str.includes(searchString[, position])
// position は省略可能。 検索し始める位置。規定値は0

console.log(str.includes('pen')) //true
console.log(str.includes('This')) //true
console.log(str.includes('this')) //false
console.log(str.includes('this', 1)) //false

//////////////////////////////
//String.prototype.padEnd()//
////////////////////////////

console.log('String.prototype.padEnd()')

//文字列が指定された長さになるように、指定された文字で延長する。
//str.padEnd(targetLength [, padString])
//targetLength = 指定する文字列の長さ　短い場合はそのまま表示される
//padString は省略可能。延長するための文字列。規定値は" "(空白)

console.log(str.length) //14

console.log(str.padEnd(20)) //"This is a pen.      "
console.log(str.padEnd(17, '.')) //This is a pen....
console.log(str.padEnd(25, 'Yes!')) //This is a pen.Yes!Yes!Yes
console.log(str.padEnd(25, 'No! This is a book.')) //This is a pen.No! This is
console.log(str.padEnd(3)) //This is a pen.