import router from '@routes/index.routes';
import '@styles/header.scss';
import '@styles/main.scss';
import '@styles/loader.scss';
import '@styles/scrollup.scss';
import '@styles/footer.scss';
import '@styles/notFound.scss';

router(window.location.hash);

window.addEventListener('hashchange', function () {
    router(window.location.hash);
});


