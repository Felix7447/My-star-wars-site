import '@styles/main.scss';
import '@styles/footer.scss';

const carousel = document.getElementById('carousel');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
let posX = 0;
const step = 500;

leftArrow.addEventListener("click", function() {
    move(carousel, 'left')
});

rightArrow.addEventListener("click", function() {
    move(carousel, 'right')
});

function move(element, direction) {
    let currentScroll = element.scrollLeft;
    
    if (direction === 'right') {
        element.scrollTo(currentScroll + step, 0);
    } else if (direction === 'left') {
        element.scrollTo(currentScroll - step, 0);
    }
}