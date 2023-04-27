/**
 * Template specs for the Rail Component.
 * This iterface decides the structure of the rail component's template structure.
 */
import { Lightning } from "@lightningjs/sdk";
import { Content } from "../../api-request-response";
// @ts-ignore
import { ProgressBar } from "@lightningjs/ui";

/**
 * properties of the Rail Item component
 *
 */

interface RailItemTemplateSpec extends Lightning.Component.TemplateSpec {

    /**
     * properties and functions of the component
     */



    /**
     * children of the component
     */
    Image: object;
    Label: object;
    data: Content;
    Rectangle?: object;
    ProgressBar: typeof ProgressBar;
    PlayButton: object;

}

export default RailItemTemplateSpec;
