'use strict'

const scoring = (score) => {
    if (score >= 70) {
        return '秀'
    } else if (score >= 40) {
        return '良'
    } else {
        return '不可'
    }
}

console.log(scoring(100)) 
console.log(scoring(60)) 
console.log(scoring(13)) 