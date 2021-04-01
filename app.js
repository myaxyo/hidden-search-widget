const btn = document.querySelector('.btn')
const searchInput = document.querySelector('.input')
const search = document.querySelector('.search')


btn.addEventListener('click', () => {
    search.classList.toggle('active')
    searchInput.focus()
})