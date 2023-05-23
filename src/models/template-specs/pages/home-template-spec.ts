/**
 * Template specs for the App.ts.
 * This iterface decides the structure of the app's template structure.
*/

import { Lightning } from '@lightningjs/sdk';
import TopNav from '../../../components/organisms/top-nav/TopNav';
import { Content } from '../../api-request-response';
import { PreviewComponent, FocusBox } from '../../../components';

interface HomeTemplateSpec extends Lightning.Component.TemplateSpecLoose {
    /**
     * properties of the component
     */
    index: number;
    rowLength: number;
    hideNav: boolean;
    eventData: Content;



    /**
     * children of the component
     */
    Background: {
        Version: object
        ContentDetails: typeof PreviewComponent;
        Slider: {
            Wrapper: {
                Widgets: {
                    Carousel: object;
                    Rails: object;
                    LongRail: object;
                }
            }
        },
        Box: {
            InnerBox: object
        }

    }
    Navbar: typeof TopNav;
}

export default HomeTemplateSpec;
