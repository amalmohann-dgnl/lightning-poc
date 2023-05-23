import { Lightning, Colors, Storage } from '@lightningjs/sdk';
import { RailTemplateSpec } from "../../../models/template-specs";
import RailItem from '../../molecules/rail-item/RailItem';
import { AxiosRequester } from '../../../services';
import { RailDataResponse, Content, Image } from '../../../models/api-request-response';
import { endpoint, theme, railName } from '../../../configs';
import endp from '../../../configs/endpoint-url';
import { cardSizes, diamensions } from '../../../pages/utils/rail-utils/cardUtils';

class Rail extends Lightning.Component<RailTemplateSpec> implements Lightning.Component.ImplementTemplateSpec<RailTemplateSpec> {
    index: number = -1;
    dataLength: number = 0;
    railIndex: number = 0;
    axiosRequester: AxiosRequester = new AxiosRequester();
    responseData: RailDataResponse = {} as RailDataResponse;
    data: Content[] = [];

    readonly Wrapper = this.tag('Slider.Wrapper')!

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
            text: {
              text: "",
              fontSize: 35,
              fontFace: "Saira Regular",
              fontStyle: "600",
            },
          },
          Slider: {
            w: 1920,
            h: 400,
            y: 105,
            mount: 0,
            rect: true,
            clipping: true,
            color: Colors("transparent").get(),
            Wrapper: {
              x: 80,
            },
          },
        };
    }

    /**
    * This function is responsible for setting up the initial states of the component when
    * attached for the first time. This function takes  no parameters and has no return.
    */
    override _init() {
        const rail: { type: typeof RailItem; x: number; item: { label: string; src: string; data: Content, index: number, totalElements: number, cardSize: diamensions; railIndex: number }; }[] = [];
        if (this.railIndex < endp.length) {
            this.axiosRequester.fetch(endpoint[this.railIndex]!).then((response) => {
                if (response) {
                    this.responseData = response[0]?.data;
                    this.dataLength = this.responseData.totalElements || 0;
                    this.data = this.responseData.content || [];
                    for (let i = 0; i < this.dataLength; i++) {
                        let cardSize = cardSizes.regular
                        let img_src = this.data[i]?.images.find((img: Image) => img.width === 288)?.url

                        // Just a random scenerio. Making 2 rail cards different in diamensions
                        if (this.dataLength === 10 || this.dataLength === 31) {
                            cardSize = cardSizes.wide
                            img_src = this.data[i]?.images.find((img: Image) => img.width === 526)?.url
                        }
                        let label = this.data[i]?.title!;
                        let cardWidthIncludingMargin = cardSize.w + cardSize.margin
                        rail.push({
                            type: RailItem,
                            x: i * cardWidthIncludingMargin,
                            item: { label: label, src: img_src || "https://pmd205470tn-a.akamaihd.net/D2C_-_Content/191/249/oyPcsfGWL5Se6RGW1JCVgpHlASH_288x432_13635141800.jpg", data: this.data[i]!, index: i, totalElements: this.dataLength, cardSize: cardSize, railIndex: this.railIndex }
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
        else {
            this.setLongRail();
        }
    }


    async setLongRail() {
        console.log("je");
        this.data = await Storage.get('longData');
        this.dataLength = this.data.length;
        console.log(this.data.length);

        const rail: { type: typeof RailItem; x: number; item: { label: string; src: string; data: Content }; }[] = [];
        for (let i = 0; i < this.dataLength; i++) {
            let label = this.data[i]?.title!;
            let img_src = this.data[i]?.images.find((img: Image) => img.width === 288)?.url

            rail.push({
                type: RailItem,
                x: i * (216 + 30),
                item: { label: label, src: img_src || "https://pmd205470tn-a.akamaihd.net/D2C_-_Content/191/249/oyPcsfGWL5Se6RGW1JCVgpHlASH_288x432_13635141800.jpg", data: this.data[i]! }
            });
        }
        this.patch({
            Header: { text: railName[this.railIndex]! }
        })
        this.tag('Wrapper' as any).children = rail;
        this.index = 0;
        // this._setState("RowItem")
    }


    /**
     * To repostion the wrapper on the focused element. Function does not take any parameters
     * nor has any return.
     */

    repositionWrapper() {
        const wrapper = this.tag('Wrapper' as any);
        const currentFocus = wrapper.children[this.index]
        const cardSize = currentFocus.cardSize
        if (this.index < this.dataLength - (cardSize.minimumCardsInViewport - 1)) {
            wrapper.setSmooth("x", -(cardSize.w + cardSize.margin) * this.index + 80, { duration: 0.1 });
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

    // override _getFocused(): any {
    //     return this.tag('Slider.Wrapper' as any).children[this.index];
    // }


    override _getFocused(): any {
        return this.tag('Slider.Wrapper' as any).children[this.index];
    }



}

export default Rail;
