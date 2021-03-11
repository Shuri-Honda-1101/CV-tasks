'use strict'

const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

const scoring = score => {
    if (score >= 70) {
        return '秀'
    } else if (score >= 40) {
        return '良'
    } else {
        return '不可'
    }
}

scores.forEach(scoresItem => {
    console.log(scoring(scoresItem))
})