const modal = document.getElementById ('modal')
const body = document.querySelector('body')

function openModal () {
    // modal.style.display = 'flex'
    modal.classList.toggle('modalClose')
    modal.classList.toggle('modalOpen')
    body.classList.toggle('bodyModal')
}