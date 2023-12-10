const accordeon = document.querySelector('.questions-accordion')
const accordeonTitles = accordeon.querySelectorAll('.questions-accordion__title')

accordeonTitles.forEach((accordeonTitle) => {
    accordeonTitle.addEventListener('click', function(){
        const currentText = accordeonTitle.parentElement.querySelector('.questions-accordion__text')
        accordeonTitle.classList.toggle('questions-accordion--active')
        currentText.classList.toggle('questions-accordion__text--visible')

        if (currentText.classList.contains('questions-accordion__text--visible')){
            currentText.style.maxHeight = currentText.scrollHeight + 'px'
        }else{
            currentText.style.maxHeight = null
        }
    })
})