import { Lightning, Storage } from '@lightningjs/sdk';
import { Rail, RailItem } from '../../components';
import { endpoint, theme } from '../../configs';
import { HomeTemplateSpec } from './../../models/template-specs';
import TopNav from '../../components/organisms/top-nav/TopNav';
import AxiosRequester from '../../services/AxiosRequester';
import { RailDataResponse, Content, Image } from '../../models/api-request-response/rail-data.response';
import axios from 'axios';

// Home component
export class Home
    extends Lightning.Component<HomeTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<HomeTemplateSpec>
{
    index: number = 0;
    rowLength: number = endpoint.length;
    hideNav: boolean = false;

    readonly Wrapper = this.getByRef('Background.Slider.Wrapper' as any)!

    /**
     * This function is responsible for the creation and return of the UI template. This function 
     * takes  no parameters and returns the template.
     * 
     * @returns Template for the Application
     * 
     */
    static override _template(): Lightning.Component.Template<HomeTemplateSpec> {
        return {
            Navbar: { type: TopNav },
            Background: {
                w: 1920, h: 1080,
                color: theme.colors.primaryLight,
                rect: true,
                ContentDetails: {},
                Slider: {
                    zIndex: 2,
                    clipping: true,
                    w: 1920, h: (h: number) => h, x: 960, y: 1100, mount: 0.5,
                    Wrapper: {}
                }
            },
        };
    }


    // initializing the component
    override _init() {
        this.backgroundFetchAndSave();
        const rails = [];
        for (let i = 0; i < this.rowLength; i++) {
            rails.push({ type: Rail, x: 0, y: i * (500 + 50), railIndex: i })
        }
        this.tag('Background.Slider.Wrapper' as any).children = rails;
    }

    async backgroundFetchAndSave() {
        let axiosRequester: AxiosRequester = new AxiosRequester();
        let longData: Content[] = [];
        for (let epoint of endpoint) {
            await axiosRequester.fetch(epoint!).then((response) => {
                if (response) {
                    let responseData: RailDataResponse = response[0]?.data;
                    let data: Content[] = responseData.content || [];
                    longData = [...longData, ...data]
                }
            });
        }
        await Storage.set('longData', longData);
    }


    // repositioning the wrapper
    repositionWrapper() {
        const wrapper = this.tag('Background.Slider.Wrapper' as any);
        const sliderH = this.tag('Background.Slider' as any).h;
        const currentWrapperY = wrapper.transition('y').targetvalue || wrapper.y;
        const currentFocus = wrapper.children[this.index];
        const currentFocusY = currentFocus.y + currentWrapperY;
        const currentFocusOuterHeight = currentFocus.y + currentFocus.h;
        if (currentFocusY < 0) {
            wrapper.setSmooth('y', -currentFocus.y);
        }
        else if (currentFocusOuterHeight > sliderH) {
            wrapper.setSmooth('y', sliderH - (currentFocusOuterHeight));
        }
    }



    // handling up button click
    override _handleUp() {
        if (this.index > -1) {
            this.index -= 1;
            if (this.index >= 0) {
                this.repositionWrapper();
            }
        }

    }

    // handling down button click
    override _handleDown() {
        if (this.index < this.rowLength - 1) {
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
        // Hide and Show Navbar on scroll
        if (this.index <= 0) {
            this.patch({
                Navbar: {
                    visible: true,
                }
            })
        }
        else {
            this.patch({
                Navbar: {
                    visible: false,
                }
            })
        }

        // focus selection for Top Navigation and The content rails
        if (this.index >= 0) {
            return this.tag('Background.Slider.Wrapper' as any).children[this.index];
        }
        else {
            return this.tag('Navbar' as any);
        }
    }

}