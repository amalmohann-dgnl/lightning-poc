/** 
 * Template specs for the App.ts.
 * This iterface decides the structure of the app's template structure.
*/

import { Lightning } from '@lightningjs/sdk';
import TopNav from '../../../components/organisms/top-nav/TopNav';

interface HomeTemplateSpec extends Lightning.Component.TemplateSpecLoose {
    /**
     * properties of the component
     */
    index: number;
    rowLength: number;
    hideNav: boolean;


    /**
     * children of the component
     */
    Background: {
        Slider: {
            Wrapper: {
                Widgets: {
                    Carousel: object;
                    Rails: object;
                }
            }
        }

    }
    Navbar: typeof TopNav;
}

export default HomeTemplateSpec;