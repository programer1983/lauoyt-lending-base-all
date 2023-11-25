const openmodal = document.getElementById('contacts-modal-open')
const mymodal = document.getElementById('contacts-modal')
const closemodal = document.getElementById('contacts-modal-close')

openmodal.addEventListener('click', openModal)
closemodal.addEventListener('click', closeModal)

function openModal(){
    mymodal.classList.add('open')
}

function closeModal(){
    mymodal.classList.remove('open')
}