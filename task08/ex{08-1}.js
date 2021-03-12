'use strict'

// const comments = document.body.innerHTML.match(/<!-- (.*?) -->/g)
// for(let i = 0; i < comments.length; i++) {
//     console.log(comments[i]);
//   } 
// => [<!-- ★ -->, <!-- ★★ -->, <!-- ★★★ -->]の配列

// //コメントアウトを摘出。
// //タグの中に<!-- ★ --><!-- ★★ --><!-- ★★★ -->が含まれる時、
// //それぞれのテキストを出すにはどうすれば？

const kaimonoP = document.getElementById('kaimono').querySelector('p')
// const kaimonoP02 = document.querySelector('#kaimono p')
// console.log(kaimonoP02.textContent)
const todo = document.querySelector('#todo h1')
// const list = document.querySelectorAll('.list') //=>ulの配列
// const kadai = list[1].children[1]
const kadai02 = document.querySelector('#todo .list').children[1]

const text = [kaimonoP, todo, kadai02]
for(let i=0; i<3; i++) {
    console.log(text[i].textContent)
}