/* ========== TABS ================================ */

const tabItem = document.querySelectorAll('.travels-technologies__button')
const tabContent = document.querySelectorAll('.travels-technologies__items-col')

tabItem.forEach(function(element){
  element.addEventListener('click', open)
})

function open(e){
  const tabTarget = e.currentTarget
  const button = tabTarget.dataset.button

  tabItem.forEach(function(item){
    item.classList.remove('travels-technologies__button--active"')
  })

  tabContent.forEach(function(item){
    item.classList.remove('travels-technologies--active')
  })

  tabTarget.classList.add('travels-technologies__button--active')
  document.querySelector(`#${button}`).classList.add('travels-technologies--active')
}