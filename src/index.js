import home from './views/Home';
import router from './routes/index.routes';
import '@styles/main.scss';
import '@styles/footer.scss';

router('')

window.addEventListener('hashchange', function () {
    router(window.location.hash);
});


