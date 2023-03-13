import { Router } from "@lightningjs/sdk";
import { Home, Search } from "../pages";

const routes = {
    root: 'home',
    routes: [
        {
            path: 'home',
            component: Home,
        },
        {
            path: 'search',
            component: Search,
        },
        {
            path: 'settings',
            component: Home,
        },
        {
            path: 'content/:id',
            component: Home,
        },

    ]
} as Router.Config;

export default routes;