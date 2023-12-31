import { renderHome } from './pages/home.js'
import { renderLogin } from './pages/login.js';
import { renderRegister } from './pages/register.js';
import { renderCreate } from './pages/create.js';
import { renderLogout } from './pages/logout.js';
import { render404 } from './pages/404.js';
const routes = { 
'/': renderHome,
'/login': renderLogin,
'/register': renderRegister,
'/create': renderCreate,
'/logout': renderLogout,
}

export function router(path) {
    //TODO HIDE ALL SECTIONS;
hideContent()
    const renderer = routes[path] || render404;
    renderer()
}

function hideContent() {
    const main = document.querySelector('.main-content');
    for (const section of main.children) {
        section.style.display = 'none';
    }
}