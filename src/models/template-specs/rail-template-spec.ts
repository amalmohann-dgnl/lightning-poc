/**
 * Template specs for the Rail Component.
 * This iterface decides the structure of the rail component's template structure.
 */

import { Lightning } from "@lightningjs/sdk";
import { AxiosRequester } from '../../services';
import { RailDataResponse } from '../api-request-response';

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
    railIndex: number;
    axiosRequester: AxiosRequester;
    responseData: RailDataResponse;
    repositionWrapper: () => void;

    /**
     * children of the Rail component
     */
    Header: object;
    Slider: {
        Wrapper: object;
    };
}

export default RailTemplateSpec;
