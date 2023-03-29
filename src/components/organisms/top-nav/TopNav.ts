import { Lightning, Router } from '@lightningjs/sdk';
import { theme } from '../../../configs';
import TopNavTemplateSpec from '../../../models/template-specs/components/top-nav-template-spec';
import NavTextItem from '../../atoms/nav-text-item/NavTextItem';
import NavProfileItem from '../../atoms/nav-Profile-item/NavProfileItem';


class TopNav extends Lightning.Component<TopNavTemplateSpec> implements Lightning.Component.ImplementTemplateSpec<TopNavTemplateSpec>{

    index: number = 0;


    static override _template(): Lightning.Component.Template<Lightning.Component.TemplateSpecLoose> {
        return {
            Navbar: {
                w: 1920, h: 1080, rect: true,
                zIndex: 1,
                shader: { x: 100, y: -100, pivot: 0.5, type: Lightning.shaders.RadialGradient, outerColor: theme.colors.primaryLight, innerColor: theme.colors.dark, radius: 800 },
                NavItems: {
                    x: 10, y: 10,
                    NavMenu: {
                        shader: null,
                    }
                }

            }
        }
    }


    /**
    * This function is responsible for setting up the initial states of the component when
    * attached for the first time. This function takes  no parameters and has no return.
    */
    override _init() {
        const menus = {
            Home: {
                type: NavTextItem,
                x: 20, y: 12,
                navtext: "Home"
            },
            Search: {
                type: NavTextItem,
                x: 140, y: 12,
                navtext: "Search"
            },
            Gridlayout: {
                type: NavTextItem,
                x: 280, y: 12,
                navtext: "Grids"
            },
            Profile: {
                x: 1840, y: 15,
                type: NavProfileItem,
            },
            // Exit: {
            //     type: NavTextItem,
            //     x: (x: number) => x - 100, y: 20,
            //     navtext: "Exit"
            // }
        }
        this.tag('Navbar.NavItems.NavMenu' as any).children = menus;

        // animating the shader background
        this.tag('Navbar')?.animation({
            duration: 8, repeat: -1, delay: 2,
            actions: [
                { p: 'shader.radius' as '$$number', v: { 0: { v: 800 }, 0.5: { v: 400 }, 1: { v: 800 } } }
            ]
        }).start();
    }


    /**
     * This function overrides the default behaviour of keypress 'Left'.
     * This functions checks the index to see the focused element and decides
     * wheather if it should move to the left or not. 
     */

    override _handleLeft() {
        if (this.index > 0) {
            this.index -= 1;
        }
    }

    /**
     * This function overrides the default behaviour of keypress 'Right'.
     * This functions checks the index to see the focused element and decides
     * wheather if it should move to the right or not.
     */

    override _handleRight() {
        if (this.index < 3) {
            this.index += 1;
        }
    }


    /**
    * This function overrides the default behaviour of keypress 'Enter'.
    * This functions checks the index to see the focused element and decides
    * the route to navigate.
    */
    override _handleEnter() {
        if (this.index === 0) {
            Router.navigate('home');
        }
        else if (this.index === 1) {
            Router.navigate('search');
        }
        else if (this.index === 2) {
            Router.navigate('grid');
        }
        else {
            Router.navigate('settings');
        }
    }


    override _getFocused(): any {
        return this.tag('Navbar.NavItems.NavMenu' as any).children[this.index];
    }

    /**
     * This function overrides the default behavior of the component when come in focus.
     * We can add all the changes / updates that needs to be made to the component when
     * it comes to the focus.
     *
     */
    override _focus() { }

    /**
     * This function overrides the default behavior of the component when goes out of focus.
     * We can add all the changes / updates that needs to be made to the component when
     * it goes out of the focus.
     *
     */
    override _unfocus() {
        this.index = 0;
    }


}

export default TopNav;