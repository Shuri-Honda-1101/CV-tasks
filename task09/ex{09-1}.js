'use strict'

const addbtn = document.getElementById('add')
const removebtn = document.getElementById('remove')
const list  = document.getElementById('list')
let count = 0

addbtn.addEventListener('click', () => {
    count += 1
    const newItem = document.createElement('li')
    newItem.textContent = `アイテム${count}`
    list.appendChild(newItem)
})

removebtn.addEventListener('click', () => {
    if(list.children.length === 0) {

    } else {
        list.removeChild(list.lastElementChild)
    }
})

