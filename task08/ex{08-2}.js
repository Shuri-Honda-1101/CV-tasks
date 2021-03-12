'use strict'

const elements = [
    {tag: 'h1', text: 'DOM'},
    {tag: 'p', text: 'JavaScriptからHTMLを扱うための仕組み'},
    {tag: 'h2', text:'印象に残っているトピック'},
    {tag: 'ul', text: null},
    {tag: 'li', text: 'documentオブジェクト'},
    {tag: 'li', text: 'getElementById'},
    {tag: 'li', text: 'イベントリスナ'}]


elements.forEach((element) => {
    const newItem = document.createElement(element.tag)
    newItem.textContent = element.text
    if (element.tag === 'li') {
        document.querySelector('ul').appendChild(newItem)
    } else
    document.body.appendChild(newItem)
})