fetch('https://practice-projects.vercel.app')
.then(res => res.json())
.then(res => {
    const list = document.querySelector('#list')
    const loader = document.querySelector('#loader')
    loader.style.display = 'none'
    res.forEach(({ text }) => {
        const listItem = document.createElement('li')
        listItem.innerHTML = text
        list.appendChild(listItem)
    })
})