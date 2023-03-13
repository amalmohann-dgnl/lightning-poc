/** 
 * Template specs for the App.ts.
 * This iterface decides the properties, functions and structure of the app's template structure.
*/

import { Lightning } from '@lightningjs/sdk';
import { Home } from '../../pages';


/**
 * properties of the  component
 * @property index: To get the index of current focused element
 * @property dataLength: To get the length of the  Items array.
 *
 */
interface AppTemplateSpec extends Lightning.Component.TemplateSpecLoose {
    /**
     * properties of the App component
     */

    /**
     * children of the App component
     */
    Home: typeof Home
}

export default AppTemplateSpec;