'use strict'

const mul01 = x => x * 100
const sub01 = x => x - 5

const add02 = x => x + 3
const mul02 = x => x * 8

const n = 10

// n * 100 - 5
console.log(sub01(mul01(n))) // => 995

//(n + 3) * 8 + 3
console.log(add02(mul02(add02(n)))) // => 107