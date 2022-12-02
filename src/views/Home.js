import loader from '@utils/Loader';
import next from '@icons/next.png';
import showButtons from '@utils/HeaderButtons';
import { carouselElements } from '@utils/CarouselElements';

const home = () => {
    const mainContent = document.getElementById('root');
    const elements = getCarouselElements(carouselElements);
    showButtons(false);

    let loading = loader();
    const view = `
    ${loading}
    <h2 class="main-message">WELCOME MY YOUNG PADAWAN</h2>
    <section class="carousel-container">
        <div id="left-arrow" class="carousel-container__left-arrow">
            <img src=${next} alt="left arrow">
        </div>
        <div id="right-arrow" class="carousel-container__right-arrow">
            <img src=${next}>
        </div>
        <section id="carousel" class="carousel">
            ${elements}
        </section>
    </section>
    `
    mainContent.innerHTML = view;
    addEvents();
    removeLoading();
}

function addEvents() {
    const carousel = document.getElementById('carousel');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const carouselElement = document.getElementsByClassName('carouselElement');
    const loader = document.getElementById('loader');

    loader.style.display = 'flex';

    for (let index = 0; index < carouselElement.length; index++) {
        carouselElement[index].addEventListener("click", function() {
            loader.style.display = 'flex';
        });
    }
    
    leftArrow.addEventListener("click", function() {
        move(carousel, 'left');
    });
    
    rightArrow.addEventListener("click", function() {
        move(carousel, 'right');
    });
}

function move(element, direction) {
    const step = 500;
    let currentScroll = element.scrollLeft;
    
    if (direction === 'right') {
        element.scrollTo(currentScroll + step, 0);
    } else if (direction === 'left') {
        element.scrollTo(currentScroll - step, 0);
    }
}

function removeLoading() {
    const charactersImage = document.getElementById('charactersImage');
    const planetsImage = document.getElementById('planetsImage');
    const filmsImage = document.getElementById('filmsImage');
    const speciesImage = document.getElementById('speciesImage');
    const vehiclesImage = document.getElementById('vehiclesImage');
    const starshipsImage = document.getElementById('starshipsImage');
    const loader = document.getElementById('loader');

    let imagesLoaded = 0;
    let images = [charactersImage, planetsImage, filmsImage, speciesImage, vehiclesImage, starshipsImage];

    images.forEach(element => {
        element.addEventListener("load", function() {
            imagesLoaded++;
            if (imagesLoaded === 6) {
                removeLoader(loader);
            }
        });
    })
}

function removeLoader(element) {
    element.style.display = 'none';
}

function getCarouselElements(info) {
    let elements = '';
    info.forEach(element => {
        elements += `
            <div class="carousel-element">
                <a class="carouselElement" href="${element.href}">
                    <img id="${element.imageId}" class="carousel-element__image" src="${element.imageSrc}" alt="${element.name}">
                    <div class="carousel-element__content">
                        <h3>${element.name}</h3>
                    </div>
                </a>
            </div>
        `
    })
    return elements;
}

export default home;