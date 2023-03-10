import { Lightning } from '@lightningjs/sdk';
import { theme } from '../../../configs';
import TopNavTemplateSpec from '../../../models/template-specs/top-nav-template-spec';
import { NavTextItem } from '../../';


class TopNav extends Lightning.Component<TopNavTemplateSpec> implements Lightning.Component.ImplementTemplateSpec<TopNavTemplateSpec>{

    index: number = 0;


    static override _template(): Lightning.Component.Template<Lightning.Component.TemplateSpecLoose> {
        return {
            Navbar: {
                w: 1920, h: 170, rect: true,
                color: theme.colors.background,
                zIndex: 1,
                shader: { type: Lightning.shaders.FadeOut, top: 0, right: 0, bottom: 90, left: 0 },
                Profile: {
                    x: (x: number) => x - 100, y: 20,
                    w: 50, h: 50,
                    src: "https://pmd205470tn-a.akamaihd.net/D2C_-_Content/191/249/oyPcsfGWL5Se6RGW1JCVgpHlASH_288x432_13635141800.jpg"
                },
                NavMenu: {}
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
                x: 30, y: 20,
                navtext: "Home"
            },
            Search: {
                type: NavTextItem,
                x: 160, y: 20,
                navtext: "Search"
            },
            // Exit: {
            //     type: NavTextItem,
            //     x: (x: number) => x - 100, y: 20,
            //     navtext: "Exit"
            // }
        }
        this.tag('Navbar.NavMenu' as any).children = menus;
        this._setState("NavItems")
    }

    /**
     * This function overrides the default behaviour of keypress 'Left'.
     * This functions checks the index to see the focused element and decides
     * wheather if it should move to the left or not. And then it will reposition
     * the wrapper.
     */

    override _handleLeft() {
        this._setState("NavItems")
    }

    /**
     * This function overrides the default behaviour of keypress 'Right'.
     * This functions checks the index to see the focused element and decides
     * wheather if it should move to the right or not. And then it will reposition
     * the wrapper.
     */

    override _handleRight() {
        this._setState("NavItems")
    }



    static override _states(): Lightning.Component.Constructor<Lightning.Component<Lightning.Component.TemplateSpecLoose, Lightning.Component.TypeConfig>>[] {
        return [
            class NavItems extends this {
                override _handleLeft() {
                    if (this.index > 0) {
                        this.index -= 1;
                    }
                }

                override _handleRight() {
                    if (this.index < 1) {
                        this.index += 1;
                    }
                }

                override _getFocused(): any {
                    return this.tag('Navbar.NavMenu' as any).children[this.index];
                }
            }
        ]
    }

}

export default TopNav;






