import { Lightning, Storage } from '@lightningjs/sdk';
import { PreviewComponent, Rail, FocusBox } from '../../components';
import { endpoint, theme } from '../../configs';
import { HomeTemplateSpec } from './../../models/template-specs';
import AxiosRequester from '../../services/AxiosRequester';
import { RailDataResponse, Content, Image } from '../../models/api-request-response/rail-data.response';

// Home component
export class Home
    extends Lightning.Component<HomeTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<HomeTemplateSpec>
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
    static override _template(): Lightning.Component.Template<HomeTemplateSpec> {
        return {
            // Navbar: { type: TopNav },
            Background: {
                w: 1920, h: 1080,
                color: theme.colors.black,
                rect: true,
                Box: {
                    x: 80,
                    y: 665,
                    InnerBox : {
                        zIndex: 3,
                        w: 100,
                        h: 100,
                        rect: true,
                        shader: { type: Lightning.shaders.RoundedRectangle, radius: 20 },
                        // shader: {type: Lightning.shaders.Hole, w: 100, h: 75, x: 40, y: 20, radius: 20},
                        color: 0xffF2DB59,
                    }
                },
                ContentDetails: {
                    type: PreviewComponent,
                },
                Slider: {
                    zIndex: 2,
                    clipping: true,
                    w: 1920, h: (h: number) => h, x: 960, y: 1100, mount: 0.5,
                    Wrapper: {}
                }
            },
        };
    }

    $changeItemOnFocus(data: Content, cardData: { railTotalElements: number, cardIndex: number, cardHeight: number, cardWidth: number }) {
        console.log("cardData", cardData);
        let imgSrc = data.images.find((img: Image) => img.width === 828)?.url;
        let title = data.title;
        let description = data.description;
        let genre = data.genre.join(' . ');
        let directorsList = data.director.map((a: any) => a.personName).join(', ');
        let actorsList = data.actor.map((a: any) => a.personName).join(', ');

        const previewItem = {
            type: PreviewComponent,
            data: { imgSrc, title, description, genre, directorsList, actorsList }
        }
        this.tag('Background.ContentDetails' as any).patch(previewItem);
        this.tag('Box')?.patch({
            InnerBox: {
                w: cardData.cardWidth + 10,
                h: cardData.cardHeight + 10,
                // shader: { w: cardData.cardWidth, h: cardData.cardHeight }
            }
        })
        const focusBox = this.tag("Box" as any)
        if (cardData.cardIndex >= cardData.railTotalElements - 6) {
            console.log('cardData.railTotalElements - cardData.cardIndex', 6 - (cardData.railTotalElements - cardData.cardIndex))
            focusBox.setSmooth("x", (216 + 30) * (7 - (cardData.railTotalElements - cardData.cardIndex)) + 80, { duration: 0.3 });
        } else focusBox.setSmooth("x", 80, { duration: 0.3 });

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

    // adding animation on entering the page.
    override _active() {
        const railInAnimation = this.tag('Background.Slider' as any).animation({
            duration: 1,
            delay: 0,
            actions: [
                { p: 'alpha', v: { 0: 0, 1: 1 } },
                { p: 'y', v: { 0: 1400, 1: 1100 } },
            ]
        });

        railInAnimation.start();
    }

    // handling up button click
    override _handleUp() {
        if (this.index > 0) {
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

    // Animating the page transition
    pageTransitionOut(page: any) {
        return new Promise<void>((resolve, reject) => {
            this.tag('Background.Slider' as any).patch({
                smooth: { y: [1300, { duration: 1, delay: 0, timingFunction: 'ease' }], alpha: 0 }
            })

            this.tag('Background.ContentDetails' as any).animate();

            // resolve Promise when transition on x is finished
            this.tag('Background.Slider' as any).transition('y').on('finish', () => {
                resolve();
            });
        });
    }
}
