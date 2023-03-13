import { Lightning, Log, Utils } from '@lightningjs/sdk';
import { RailTemplateSpec } from "../../../models/template-specs";
import RailItem from '../../molecules/rail-item/RailItem';
import { AxiosRequester } from '../../../services';
import { RailDataResponse, Content, Image } from '../../../models/api-request-response';
import { endpoint, theme } from '../../../configs';
import { railName } from '../../../data';

class Rail extends Lightning.Component<RailTemplateSpec> implements Lightning.Component.ImplementTemplateSpec<RailTemplateSpec> {
    index: number = -1;
    dataLength: number = 0;
    railIndex: number = 0;
    axiosRequester: AxiosRequester = new AxiosRequester();
    responseData: RailDataResponse = {} as RailDataResponse;
    data: Content[] = [];

    /**
   * This function is responsible for the creation and return of the UI template. This 
   * function takes  no parameters and returns the template of the Rail component.
   * 
   * @returns Template for the Rail Component.
   * 
   */

    static override _template() {
        return {
            Header: {
                x: 50,
                y: 20,
                color: theme.colors.white,
                text: { text: "", fontSize: 35 }
            },
            Slider: {
                w: 800, h: 350, x: 480, y: 280, mount: 0.5,
                Wrapper: {}
            }
        }
    }

    /**
    * This function is responsible for setting up the initial states of the component when
    * attached for the first time. This function takes  no parameters and has no return.
    */
    override _init() {
        const rail: { type: typeof RailItem; x: number; item: { label: string; src: string; }; }[] = [];
        this.axiosRequester.fetch(endpoint[this.railIndex]!).then((response) => {
            if (response) {
                this.responseData = response[0]?.data;
                this.dataLength = this.responseData.totalElements || 0;
                this.data = this.responseData.content || [];
                for (let i = 0; i < this.dataLength; i++) {
                    let label = this.data[i]?.title!;
                    let img_src = this.data[i]?.images.find((img: Image) => img.width === 288)?.url
                    rail.push({
                        type: RailItem,
                        x: i * (300 + 30),
                        item: { label: label, src: img_src || "https://pmd205470tn-a.akamaihd.net/D2C_-_Content/191/249/oyPcsfGWL5Se6RGW1JCVgpHlASH_288x432_13635141800.jpg" }
                    });
                }
            }
            this.patch({
                Header: { text: railName[this.railIndex]! }
            })
            this.tag('Wrapper' as any).children = rail;
            this.index = 0;
            this._setState("RowItem")
        })
    }


    /**
     * To repostion the wrapper on the focused element. Function does not take any parameters 
     * nor has any return.
     */

    repositionWrapper() {
        const wrapper = this.tag('Wrapper' as any);
        const sliderW = this.tag('Slider' as any).w;
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
        this._setState("RowItem")
    }

    /**
     * This function overrides the default behaviour of keypress 'Right'.
     * This functions checks the index to see the focused element and decides
     * wheather if it should move to the right or not. And then it will reposition
     * the wrapper.
     */

    override _handleRight() {
        this._setState("RowItem")
    }

    /**
     * This function will override the default behavior of the getFocused() method
     * 
     * @returns Return the child Component that this Component wishes to receive focus. Returning null 
     * or undefined tells the focus engine to not set focus on this Component at all.By default,
     * this Component's own instance is returned.
     */

    // override _getFocused(): any {
    //     return this.tag('Slider.Wrapper' as any).children[this.index];
    // }


    static override _states(): Lightning.Component.Constructor<Lightning.Component<Lightning.Component.TemplateSpecLoose, Lightning.Component.TypeConfig>>[] {
        return [
            class RowItem extends this {

                override _handleRight() {
                    if (this.index < this.dataLength - 1) {
                        this.index += 1;
                        this.repositionWrapper();
                    }
                }

                override _handleLeft() {
                    if (this.index > 0) {
                        this.index -= 1;
                        this.repositionWrapper();
                    }
                }

                override _getFocused(): any {
                    return this.tag('Slider.Wrapper' as any).children[this.index];
                }
            }
        ]
    }



}

export default Rail;