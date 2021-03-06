import loader from '@utils/Loader';
import next from '@icons/next.png';
import Characters from '@images/Characters.png';
import Planets from '@images/Planets.png';
import Films from '@images/Films.png';
import Species from '@images/Species.png';
import Vehicles from '@images/Vehicles.png';
import Starships from '@images/Starships.png';
import showButtons from '@utils/HeaderButtons';


const home = () => {
    const mainContent = document.getElementById('root');

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
            <div class="carousel-element">
                <a class="carouselElement" href="./#/Characters">
                    <img id="charactersImage" class="carousel-element__image" src=${Characters} alt="Characters">
                    <div class="carousel-element__content">
                        <h3>Characters</h3>
                    </div>
                </a>
            </div>
            <div class="carousel-element">
                <a class="carouselElement" href="./#/Planets">
                    <img id="planetsImage" class="carousel-element__image" src=${Planets} alt="Planets">
                    <div class="carousel-element__content">
                        <h3>Planets</h3>
                    </div>
                </a>
            </div>
            <div class="carousel-element">
                <a class="carouselElement" href="./#/Films">
                    <img id="filmsImage" class="carousel-element__image" src=${Films} alt="Films">
                    <div class="carousel-element__content">
                        <h3>Films</h3>
                    </div>
                </a>
            </div>
            <div class="carousel-element">
                <a class="carouselElement" href="./#/Species">
                    <img id="speciesImage" class="carousel-element__image" src=${Species} alt="Species">
                    <div class="carousel-element__content">
                        <h3>Species</h3>
                    </div>
                </a>
            </div>
            <div class="carousel-element">
                <a class="carouselElement" href="./#/Vehicles">
                    <img id="vehiclesImage" class="carousel-element__image" src=${Vehicles} alt="Vehicles">
                    <div class="carousel-element__content">
                        <h3>Vehicles</h3>
                    </div>
                </a>
            </div>
            <div class="carousel-element">
                <a class="carouselElement" href="./#/Starships">
                    <img id="starshipsImage" class="carousel-element__image" src=${Starships} alt="Starships">
                    <div class="carousel-element__content">
                        <h3>Starships</h3>
                    </div>    
                </a>
            </div>
        </section>
    </section>
    `
    mainContent.innerHTML = view;
    addEvents();
    removeLoading()
}

function addEvents() {
    const carousel = document.getElementById('carousel');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const carouselElement = document.getElementsByClassName('carouselElement');
    const charactersImage = document.getElementById('charactersImage');
    const loader = document.getElementById('loader');

    loader.style.display = 'flex';

    for (let index = 0; index < carouselElement.length; index++) {
        carouselElement[index].addEventListener("click", function() {
            loader.style.display = 'flex';
        });
    }
    
    leftArrow.addEventListener("click", function() {
        move(carousel, 'left')
    });
    
    rightArrow.addEventListener("click", function() {
        move(carousel, 'right')
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

    charactersImage.addEventListener("load", function() {
        imagesLoaded++;
        if (imagesLoaded === 6) {
            removeLoader(loader)
        }
    });

    planetsImage.addEventListener("load", function() {
        imagesLoaded++;
        if (imagesLoaded === 6) {
            removeLoader(loader)
        }
    });

    filmsImage.addEventListener("load", function() {
        imagesLoaded++;
        if (imagesLoaded === 6) {
            removeLoader(loader)
        }
    });

    speciesImage.addEventListener("load", function() {
        imagesLoaded++;
        if (imagesLoaded === 6) {
            removeLoader(loader)
        }
    });

    vehiclesImage.addEventListener("load", function() {
        imagesLoaded++;
        if (imagesLoaded === 6) {
            removeLoader(loader)
        }
    });

    starshipsImage.addEventListener("load", function() {
        imagesLoaded++;
        if (imagesLoaded === 6) {
            removeLoader(loader)
        }
    });
}

function removeLoader(element) {
    element.style.display = 'none'
}

export default home;