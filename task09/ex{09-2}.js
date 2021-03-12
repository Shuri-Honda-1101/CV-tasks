'use strict'

const addbtn = document.getElementById('add')
const removebtn = document.getElementById('remove')
const list  = document.getElementById('list')
let count = 0

addbtn.addEventListener('click', () => {
    count += 1
    const newItem = document.createElement('li')
    newItem.innerHTML = `
    <img src="http://placehold.it/64x64" alt="アイテム${count}">
    <span>アイテム${count}</span>
    `
    list.appendChild(newItem)
})

// addbtn.addEventListener('click', () => {
//     count += 1
//     const newItem = document.createElement('li')

//     const newImg = document.createElement('img')
//     newImg.setAttribute('src', 'http://placehold.it/64x64')
//     newImg.setAttribute('alt', `アイテム${count}`)
//     newItem.appendChild(newImg)

//     const newSpan = document.createElement('span')
//     newSpan.textContent = `アイテム${count}`
//     newItem.appendChild(newSpan)

//     list.appendChild(newItem)
// })

removebtn.addEventListener('click', () => {
    if(list.children.length === 0) {

    } else {
        list.removeChild(list.lastElementChild)
    }
})

