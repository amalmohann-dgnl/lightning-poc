import { Lightning, Log } from "@lightningjs/sdk";
import { RailTemplateSpec } from "../../../models/template-specs";
import RailItem from '../../molecules/rail-item/RailItem';

class Rail extends Lightning.Component<RailTemplateSpec> implements Lightning.Component.ImplementTemplateSpec<RailTemplateSpec> {
    index: number = 0;
    dataLength: number = 27;

    /**
   * This function is responsible for the creation and return of the UI template. This 
   * function takes  no parameters and returns the template of the Rail component.
   * 
   * @returns Template for the Rail Component.
   * 
   */

    static override _template() {
        return {
            Slider: {
                w: 800, h: 350, x: 480, y: 270, mount: 0.5,
                Wrapper: {}
            }
        }
    }

    /**
    * This function is responsible for setting up the initial states of the component when
    * attached for the first time. This function takes  no parameters and has no return.
    */

    override _init() {
        const buttons = [];
        for (let i = 0; i < this.dataLength; i++) {
            buttons.push({
                type: RailItem,
                x: i * (300 + 30),
                item: { label: `Content ${i + 1}`, src: `../../../../static/images/rails/${i + 1}.jpg` }
            });
        }
        this.tag('Wrapper' as any).children = buttons;
    }

    /**
     * To repostion the wrapper on the focused element. Function does not take any parameters 
     * nor has any return.
     */

    repositionWrapper() {
        const wrapper = this.tag('Wrapper' as any);
        const sliderW = this.tag('Slider' as any).w;
        Log.debug('Slider Width:', sliderW);
        Log.debug('Wrapper:', wrapper.w);
        const currentWrapperX = wrapper.transition('x').targetvalue || wrapper.x;
        const currentFocus = wrapper.children[this.index];
        const currentFocusX = currentFocus.x + currentWrapperX;
        const currentFocusOuterWidth = currentFocus.x + currentFocus.w;

        if (currentFocusX < 0) {
            wrapper.setSmooth('x', -currentFocus.x);
        }
        else if (currentFocusOuterWidth > sliderW) {
            wrapper.setSmooth('x', sliderW - (currentFocusOuterWidth));
        }
    }

    /**
     * This function overrides the default behaviour of keypress 'Left'.
     * This functions checks the index to see the focused element and decides
     * wheather if it should move to the left or not. And then it will reposition
     * the wrapper.
     */

    override _handleLeft() {
        if (this.index > 0) {
            this.index -= 1;
            this.repositionWrapper();
        }
    }

    /**
     * This function overrides the default behaviour of keypress 'Right'.
     * This functions checks the index to see the focused element and decides
     * wheather if it should move to the right or not. And then it will reposition
     * the wrapper.
     */

    override _handleRight() {
        if (this.index < this.dataLength - 1) {
            this.index += 1;
            this.repositionWrapper();
        }
    }

    /**
     * This function will override the default behavior of the getFocused() method
     * 
     * @returns Return the child Component that this Component wishes to receive focus. Returning null 
     * or undefined tells the focus engine to not set focus on this Component at all.By default,
     * this Component's own instance is returned.
     */

    override _getFocused(): any {
        return this.tag('Slider.Wrapper' as any).children[this.index];
    }


}

export default Rail;