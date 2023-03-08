/**
 * Template specs for the Rail Component.
 * This iterface decides the structure of the rail component's template structure.
 */

import { Lightning } from "@lightningjs/sdk";

/**
 * properties of the Rail component
 * @property index: To get the index of current focused element
 * @property dataLength: To get the length of the rail Items array.
 *
 * @function repositionWrapper : to reposition the rail
 *
 */
interface RailTemplateSpec extends Lightning.Component.TemplateSpec {

    /**
     * properties and functions of the Rail component
     */
    index: number;
    dataLength: number;
    repositionWrapper: () => void;

    /**
     * children of the Rail component
     */
    Slider: {
        Wrapper: object;
    };
}

export default RailTemplateSpec;
