import home from '@views/Home';
import characters from '@views/Characters';
import planets from '@views/Planets';
import films from '@views/Films';
import species from '@views/Species';
import vehicles from '@views/Vehicles';
import starships from '@views/Starships';

const mainContent = document.getElementById('root')

const routes = { 
    '': home(),
    '#/Characters': characters(),
    '#/Planets': planets(),
    '#/Films': films(),
    '#/Species': species(),
    '#/Vehicles': vehicles(),
    '#/Starships': starships(),
}

async function router(route) {
    if (route === '') {
        home()
    } else {
        mainContent.innerHTML = await routes[route];
    }
}

export default router;