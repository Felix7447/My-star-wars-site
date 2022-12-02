import home from '@views/Home';
import characters from '@views/Characters';
import planets from '@views/Planets';
import films from '@views/Films';
import species from '@views/Species';
import vehicles from '@views/Vehicles';
import starships from '@views/Starships';
import notFound from '@views/notFound';
import { ScrollUpEvents } from '@utils/ScrollUp';
import { showButtons, addRef } from '@utils/HeaderButtons';

const mainContent = document.getElementById('root');

const routes = { 
    '': home,
    '#/Characters': characters(),
    '#/Planets': planets(),
    '#/Films': films(),
    '#/Species': species(),
    '#/Vehicles': vehicles(),
    '#/Starships': starships(),
}

async function router(route) {
    if (route === '') {
        home();
    } else {
        const content = await routes[route];
        if (!content) {
            mainContent.innerHTML = await notFound();
        } else {
            mainContent.innerHTML = content;

            const loaderElement = document.getElementById("loader");
            loaderElement.style.display = 'none';

            const nextButton = document.getElementById('nextButton');
            
            addRef(nextButton);
            showButtons(true);
            ScrollUpEvents();
        }
    }
}

export default router;