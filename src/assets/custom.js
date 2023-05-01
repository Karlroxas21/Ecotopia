const observer = new IntersectionObserver((entries, observer) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            const animationDirection = entry.target.getAttribute('data-animation');
            entry.target.classList.add(`${animationDirection}-visible`)
            observer.unobserve(entry.target);
        }
    })
})

const elements = document.querySelectorAll('[data-animation]');

elements.forEach(element => {
    observer.observe(element);
})