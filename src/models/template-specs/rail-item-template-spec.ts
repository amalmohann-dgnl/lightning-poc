/**
 * Template specs for the Rail Component.
 * This iterface decides the structure of the rail component's template structure.
 */
import { Lightning } from "@lightningjs/sdk";

/**
 * properties of the Rail Item component
 *
 */

interface RailItemTemplateSpec extends Lightning.Component.TemplateSpec {

    /**
     * properties and functions of the Rail component
     */



    /**
     * children of the Rail component
     */
    Image: object;
    Label: object;
    Rectangle?: object;

}

export default RailItemTemplateSpec;
