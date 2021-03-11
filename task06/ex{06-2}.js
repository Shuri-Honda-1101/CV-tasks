'use strict'

const items = [
    // 日  月  火  水  木  金  土
      [14, 93, 89, 51, 85, 59, 33],
      [69, 27, 40, 76, 25, 21, 55],
      [55, 60,  3, 28, 49,  5, 91],
      [19, 56, 92, 66, 53, 80, 13],
    ]
    
    
    const sums = items.map((item) => {
        return item.reduce((sum, element) => sum + element, 0) //{}があるのでreturn〜〜〜と書かないとNG
    })
    console.log(sums) //=> [424, 313, 291, 379]

    //itemsを指定している => 処理はその子要素に行う（ので、その子要素の名前をitemと仮称している。a でも x でも aaa　でもなんでもOK)
    //この場合、item = items[i]　=[a, b, c, d, ...]
    //reduceは配列の頭からお尻まで全て足す。つまり、items[i]を全て足している。
    //itemsのmap関数なので、それはitemsのインデックス全てに順に行われて配列として出される。