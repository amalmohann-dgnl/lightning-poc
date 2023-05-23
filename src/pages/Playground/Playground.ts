import { Colors, Lightning, Storage } from '@lightningjs/sdk';
import { PreviewComponent, Rail, FocusBox, TopNav } from '../../components';
import { endpoint, theme } from '../../configs';
import AxiosRequester from '../../services/AxiosRequester';
import { RailDataResponse, Content, Image } from '../../models/api-request-response/rail-data.response';
import { diamensions } from '../utils/rail-utils/cardUtils';
import PlaygroundTemplateSpec from './Playground.tspec';

// Playground component
export class Playground
    extends Lightning.Component<PlaygroundTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<PlaygroundTemplateSpec>
{
    index: number = 0;
    rowLength: number = endpoint.length;
    hideNav: boolean = false;
    eventData: Content = {} as Content;

    readonly Wrapper = this.getByRef('Background.Slider.Wrapper' as any)!

    /**
     * This function is responsible for the creation and return of the UI template. This function
     * takes  no parameters and returns the template.
     *
     * @returns Template for the Application
     *
     */
    static override _template(): Lightning.Component.Template<PlaygroundTemplateSpec> {
        return {

        };
    }


    // initializing the component
    override _init() {

    }




    // adding animation on entering the page.
    override _active() {

    }

    // handling up button click
    override _handleUp() {

    }

    // handling down button click
    override _handleDown() {

    }

    /**
       * This function will override the default behavior of the getFocused() method
       *
       * @returns Return the child Component that this Component wishes to receive focus. Returning null
       * or undefined tells the focus engine to not set focus on this Component at all.By default,
       * this Component's own instance is returned.
       */

    override _getFocused(): any {

    }

}
