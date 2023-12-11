let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
}

let callback = function(entries, observer){
    entries.forEach(entry => {
        if (entry.isIntersecting){
            console.log('find', entry)
            entry.target.classList.add('active')
            observer.unobserve(entry, target)
        }else{
            entry.target.classList.remove('active')
        }
    });
}

let observer = new IntersectionObserver(callback, options)

let targets = document.querySelectorAll('.questions-accordion')
targets.forEach(target => {
    observer.observe(target)
})