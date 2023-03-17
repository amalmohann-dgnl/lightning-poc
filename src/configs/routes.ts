import { Router } from "@lightningjs/sdk";
import { Home, Search, ContentDetails, VideoPlayer } from "../pages";

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
            component: ContentDetails,
            options: {
                reuseInstance: false
            }
        },
        {
            path: 'player',
            component: VideoPlayer,
        },

    ]
} as Router.Config;

export default routes;