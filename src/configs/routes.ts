import { Router } from "@lightningjs/sdk";
import { Home, Search, ContentDetails, POCVideoPlayer } from "../pages";
import GridLayout from '../components/organisms/grid/Grid';

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
            path: 'grid',
            component: GridLayout,
        },
        {
            path: 'settings',
            component: Home,
        },
        {
            path: 'content/:from/:id',
            component: ContentDetails,
            options: {
                reuseInstance: false
            }
        },
        {
            path: 'player/:id',
            component: POCVideoPlayer,
        },

    ]
} as Router.Config;

export default routes;