'use strict';

const cointoss = () => {
    const num = Math.random()
    if (num <= 0.5) {
        console.log('コインは表です！')
    } else {
        console.log('コインは裏です！')
    }
}

for (let i=1; i<=10; i++){
    cointoss()
}