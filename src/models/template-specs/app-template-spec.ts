/** 
 * Template specs for the App.ts.
 * This iterface decides the structure of the app's template structure.
*/

import { Lightning } from '@lightningjs/sdk';


/**
 * properties of the Rail component
 * @property index: To get the index of current focused element
 * @property dataLength: To get the length of the rail Items array.
 *
 * @function repositionWrapper : to reposition the rail
 *
 */
interface AppTemplateSpec extends Lightning.Component.TemplateSpec {
    /**
     * properties of the App component
     */
    index: number;
    rowLength: number;


    /**
     * children of the App component
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
}

export default AppTemplateSpec;