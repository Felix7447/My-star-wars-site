export const showButtons = (on) => {
    const backButton = document.getElementById('backButton');
    const nextButton = document.getElementById('nextButton');

    backButton.style.display = 'none';
    nextButton.style.display = 'none';

    if (on) {
        backButton.style.display = 'inline';
        nextButton.style.display = 'inline';
    }
}

export const addRef = (anchor) => {
    let locations = ['#/Characters', '#/Planets', '#/Films', '#/Species', '#/Vehicles', '#/Starships'];
    let index = locations.indexOf(window.location.hash);

    if (index + 1 >= locations.length) {
        index = -1
    }

    anchor.href = locations[index + 1];
}

export default showButtons;