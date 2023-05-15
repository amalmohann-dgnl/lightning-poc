import { Colors, Lightning, Storage, Registry } from '@lightningjs/sdk';
import { PreviewComponent, Rail } from '../../components';
import { endpoint, theme } from '../../configs';
import { HomeTemplateSpec } from './../../models/template-specs';
import AxiosRequester from '../../services/AxiosRequester';
import { RailDataResponse, Content, Image } from '../../models/api-request-response/rail-data.response';
import { diamensions } from '../utils/rail-utils/cardUtils';

// Home component
export class Home
    extends Lightning.Component<HomeTemplateSpec>
    implements Lightning.Component.ImplementTemplateSpec<HomeTemplateSpec>
{
    index: number = 0;
    rowLength: number = endpoint.length;
    hideNav: boolean = false;
    eventData: Content = {} as Content;

    readonly Wrapper = this.tag('Background.Slider.Wrapper' as any)!

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
                Version: {
                  x: 50, y: 25, w: 100, h: 100, alpha: 0.3,
                  text: { text: 'V: 0.0.1', fontSize: 20, }
                },
                Box: {
                    x: 80,
                    y: 665,
                    InnerBox: {
                        zIndex: 3,
                        rect: true,
                        shader: { type: Lightning.shaders.RoundedRectangle, radius: 20, stroke: 5, strokeColor: theme.colors.yellow },
                        color: Colors('transparent'),
                    }
                },
                ContentDetails: {
                    type: PreviewComponent,
                },
                Slider: {
                    zIndex: 2,
                    clipping: true,
                    color: Colors('transparent').get(),
                    w: 1920,
                    h: 540,
                    x: 1920, y: 0, mount: 1, rect: true,
                    Wrapper: {}
                }
            },
        };
    }

    $changeItemOnFocus(data: Content, cardData: { railTotalElements: number, cardIndex: number, cardHeight: number, cardWidth: number, cardSize: diamensions; railIndex: number }) {
        // console.log('debug: this.index', this.index);
        // console.log('debug: railIndex', cardData.railIndex);

        let imgSrc = data.images.find((img: Image) => img.width === 828)?.url;
        let title = data.title;
        let description = data.description;
        let genre = data.genre.join(' . ');
        let directorsList = data.director.map((a: any) => a.personName).join(', ');
        let actorsList = data.actor.map((a: any) => a.personName).join(', ');


        const { railTotalElements, cardIndex, cardSize, railIndex } = cardData;
        const { minimumCardsInViewport, w, h, margin } = cardSize;

        this.tag("Background.ContentDetails" as any).Thumbnail.setSmooth('alpha', 0, { duration: 0.5 })
        this.tag("Background.ContentDetails" as any).ContentDetails.setSmooth('alpha', 0, { duration: 0.5 })

        Registry.setTimeout(() => {
          if (railIndex === this.index &&
            this.Wrapper.children[this.index].Wrapper.children[
              cardData.cardIndex
            ].focused
          ) {
            // console.log(
            //   'debug: child',
            //   this.Wrapper.children[this.index].Wrapper.children[
            //     cardData.cardIndex
            //   ].focused
            // );

            const previewItem = {
                type: PreviewComponent,
                data: { imgSrc, title, description, genre, directorsList, actorsList }
            }
            this.tag('Background.ContentDetails' as any).patch(previewItem);
          }
        }, 500);

        this.tag('Box')?.patch({
            InnerBox: {
                w: w,
                h: h,
                // shader: { w: cardData.cardWidth, h: cardData.cardHeight }
            }
        })
        const focusBox = this.tag("Box" as any)
        if (cardIndex >= railTotalElements - (minimumCardsInViewport - 1)) {
            focusBox.setSmooth("x", (w + margin) * (minimumCardsInViewport - (railTotalElements - cardIndex)) + 80, { duration: 0.1 });
        } else focusBox.setSmooth("x", 80, { duration: 0.1 });

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
    repositionWrapper() {
        const wrapper = this.tag('Background.Slider.Wrapper' as any);
        wrapper.setSmooth('y', (-540 - 10) * this.index, { duration: 0.1 })
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

        const focusBorderInAnimation = this.tag('Background.Box' as any).animation({
            duration: 1,
            delay: 0,
            actions: [
                { p: 'alpha', v: { 0: 0, 1: 1 } },
                { p: 'y', v: { 0: 965, 1: 665 } },
            ]
        });

        railInAnimation.start();
        focusBorderInAnimation.start()
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

            this.tag('Background.Box' as any).patch({
                smooth: { y: [865, { duration: 1, delay: 0, timingFunction: 'ease' }], alpha: 0 }
            })

            this.tag('Background.ContentDetails' as any).animate();

            // resolve Promise when transition on x is finished
            this.tag('Background.Slider' as any).transition('y').on('finish', () => {
                resolve();
            });
        });
    }
}
