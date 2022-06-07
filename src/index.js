import router from '@routes/index.routes';
import '@styles/main.scss';
import '@styles/loader.scss';
import '@styles/footer.scss';

router(window.location.hash);

window.addEventListener('hashchange', function () {
    router(window.location.hash);
});


