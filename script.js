// Role animation function
function startRoleAnimation() {
    document.getElementById('tririgaRole').style.opacity = 1;
    document.getElementById('watsonXRole').style.opacity = 0;

    setTimeout(function() {
        document.getElementById('tririgaRole').style.opacity = 0;
        document.getElementById('watsonXRole').style.opacity = 1;
    }, 3000);
}

// Animate skill bars on scroll using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const span = entry.target.querySelector('span');
            if (span && span.style.width) {
                span.style.setProperty('--width', span.style.width);
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill percentage elements
document.querySelectorAll('.skill-percentage').forEach(el => {
    observer.observe(el);
});

// Trigger role animation on scroll
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero');
    const heroTop = heroSection.getBoundingClientRect().top;

    if (heroTop <= window.innerHeight * 0.8) {
        startRoleAnimation();
    }
});
