const button = document.getElementById('add-button')
const input = document.getElementById('input')
const list = document.getElementById('list')

const items = localStorage.getItem('items') || []

function validateStringArray (array) {
    if (typeof array === 'string') {
        return JSON.parse(array)
    }
    return array
}

function addItem(value) {
    const li = document.createElement('li')
    li.innerText = value
    const validatedItems = validateStringArray(items)
    validatedItems.push(value)
    list.appendChild(li)
}

function addItemOnClick() {
    addItem(input.value)
    input.value = ''
    const itemsToAdd = validateStringArray(items)
    localStorage.setItem('items', JSON.stringify(itemsToAdd))
}

validateStringArray(items).forEach(addItem)

button.addEventListener('click', addItemOnClick)