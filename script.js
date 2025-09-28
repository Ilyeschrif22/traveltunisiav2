const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const hero = document.querySelector('.hero');
const exploresection = document.querySelector('.explore-section');
const maxScroll = window.innerHeight * 0.5;

window.addEventListener('scroll', () => {
    let scrollVal = window.scrollY;

    if (scrollVal > maxScroll) scrollVal = maxScroll;
    if (scrollVal < 0) scrollVal = 0;

    const progress = scrollVal / maxScroll;

    img1.style.width = `${100 - progress * 60}%`;
    img1.style.height = `${100 - progress * 50}%`;
    img2.style.width = `${progress * 60}%`;
    img2.style.height = `${progress * 50}%`;


    const colorVal = Math.round(255 * (1 - progress));
    hero.style.color = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
    exploresection.style.color = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;

    if (scrollVal >= maxScroll) {
        exploresection.style.left = 'auto';
        exploresection.style.right = '0';
    } else {
        exploresection.style.right = 'auto';
        exploresection.style.left = '0';
    }
});
