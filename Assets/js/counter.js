const counters = document.querySelectorAll(".counter");
const speed = 2000;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const inc = target / speed
        
        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 2);
        } else {
            count.innerText = target;
        }
    }
    updateCount();
});