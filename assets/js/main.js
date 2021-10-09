const counters = document.querySelectorAll('.counter');
const speed = 200
const animateDiv = document.getElementById('whatwedo')

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target')
        const count = +counter.innerText;
        const inc = target / speed;
        
        if(count < target) {
            counter.innerText = Math.ceil(count + inc)
            setTimeout(updateCount, 10);
        } else {
            count.innerText = target
        }
    }
    document.addEventListener('scroll', () => {
        const clientHeight = document.documentElement.clientHeight
        const divTop = animateDiv.getBoundingClientRect().y
        const divHeight = animateDiv.getBoundingClientRect().height
        if(clientHeight > divTop + divHeight * 2/3) {
            updateCount()
        }
    })
})

$('#navigationToogle').on('click', () => {
    $('.mobilemenu').slideToggle()
})