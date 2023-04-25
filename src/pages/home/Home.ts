import { Lightning, Storage } from '@lightningjs/sdk';
import { BackButton, Button, Rail, VideoSpecItem } from '../../components';
import { endpoint, theme } from '../../configs';
import { HomeTemplateSpec } from './../../models/template-specs';
import TopNav from '../../components/organisms/top-nav/TopNav';
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
    isContentPage: boolean = false;

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
                color: theme.colors.dark,
                rect: true,
                Thumbnail: {
                    x: 1000, y: 110,
                    scale: 1.5,
                    shader: { type: Lightning.shaders.FadeOut, innerColor: 0xff000000, left: 200, bottom: 200 },
                },
                ContentDetails: {
                    ContentData: {
                        shader: null,
                        Title: {
                            x: 40, y: 185,
                            shader: null,
                            text: {
                                fontSize: 80
                            },
                            color: theme.colors.white,
                        },
                        Description: {
                            x: 40, y: 290,
                            w: 900,
                            shader: null,
                            text: {
                                wordWrap: true,
                                maxLines: 3,
                                maxLinesSuffix: '...',
                                fontSize: 30
                            },
                            color: theme.colors.accentGrey.light,
                        },
                        Genre: {
                            x: 40, y: 400,
                            w: 900,
                            shader: null,
                            text: {
                                fontSize: 24
                            },
                            color: theme.colors.accentGrey.light,
                        },
                        Info: {
                            Director: {
                                x: 40, y: 460,
                                w: 100,
                                shader: null,
                                text: {
                                    text: 'Director : ',
                                    fontSize: 24
                                },
                                color: theme.colors.accentGrey.light,
                            },
                            Starring: {
                                x: 40, y: 490,
                                w: 100,
                                shader: null,
                                text: {
                                    text: 'Staring  : ',
                                    fontSize: 24,
                                },
                                color: theme.colors.accentGrey.light,
                            },
                            DirectorList: {
                                x: 150, y: 460,
                                w: 800,
                                shader: null,
                                text: {
                                    fontSize: 24
                                },
                                color: theme.colors.accentGrey.light,
                            },
                            StarringList: {
                                x: 150, y: 490,
                                w: 800,
                                shader: null,
                                text: {
                                    fontSize: 24,
                                    wordWrap: true,
                                    maxLines: 1,
                                    maxLinesSuffix: '...',
                                },
                                color: theme.colors.accentGrey.light,
                            }
                        },
                        VideoSpec: {
                            VideoSpec1: {
                                x: 70, y: 160,
                                shader: null,
                                type: VideoSpecItem,
                                specData: '  16+  '
                            },
                            VideoSpec2: {
                                x: 135, y: 160,
                                shader: null,
                                type: VideoSpecItem,
                                specData: '  4k  '
                            },
                            VideoSpec3: {
                                x: 193, y: 160,
                                shader: null,
                                type: VideoSpecItem,
                                specData: '  cc  '
                            },
                        },
                        ContentActions: {
                            shader: null,
                            alpha: 0,
                            BackButton: {
                                x: 40, y: 40,
                                type: BackButton
                            },
                            PlayButton: {
                                x: 40, y: 570,
                                type: Button,
                                label: "Play Video"
                            },
                            PlayTrailer: {
                                x: 40, y: 700,
                                type: Button,
                                label: "Play Trailer"
                            },
                        }
                    },
                },
                Slider: {
                    zIndex: 3,
                    clipping: true,
                    shader: null,
                    w: 1920, h: (h: number) => h, x: 960, y: 1100, mount: 0.5,
                    Wrapper: {}
                }
            },
        };
    }

    $changeItemOnFocus(img: string, title: string, description: string, genre: string, directors: string, starings: string) {
        this.tag('Background.Thumbnail' as any).animation({
            duration: 0.5,
            actions: [{ p: 'alpha', v: { 0: 1, 1: 0 } }]
        }).start();
        this.tag('Background.ContentDetails' as any).animation({
            duration: 0.5,
            actions: [{ p: 'alpha', v: { 0: 1, 1: 0 } }]
        }).start();
        this.patch({
            Background: {
                Thumbnail: {
                    src: img,
                },
                ContentDetails: {
                    ContentData: {
                        Title: {
                            text: {
                                text: title,
                            },
                        },
                        Description: {
                            text: {
                                text: description,
                            },
                        },
                        Genre: {
                            text: {
                                text: genre,
                            },
                        },
                        Info: {
                            DirectorList: {
                                text: {
                                    text: directors
                                },
                            },
                            StarringList: {

                                text: {
                                    text: starings
                                },
                            }

                        },
                    },
                },
            },
        })
        this.tag('Background.Thumbnail' as any).animation({
            duration: 0.5,
            actions: [{ p: 'alpha', v: { 0: 0, 1: 1 } }]
        }).start();
        this.tag('Background.ContentDetails' as any).animation({
            duration: 0.5,
            actions: [{ p: 'alpha', v: { 0: 0, 1: 1 } }]
        }).start();

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

    override _handleEnter() {
        this.isContentPage = !this.isContentPage;
        this.tag('Navbar' as any).animation({
            duration: 1,
            actions: [{ p: 'alpha', v: { 0: this.isContentPage ? 1 : 0, 1: this.isContentPage ? 0 : 1 } }]
        }).start();

        this.tag('Background.Slider' as any).animation({
            duration: 1,
            actions: [{ p: 'alpha', v: { 0: this.isContentPage ? 1 : 0, 1: this.isContentPage ? 0 : 1 } }]
        }).start();

        this.tag('Background.Thumbnail' as any).animation({
            duration: 1,
            actions: [{ p: 'scale', v: { 0: this.isContentPage ? 1.5 : 2, 1: this.isContentPage ? 2 : 1.5 } }]
        }).start();

        this.tag('Background.ContentDetails.ContentActions' as any).animation({
            duration: 1,
            actions: [{ p: 'alpha', v: { 0: this.isContentPage ? 0 : 1, 1: this.isContentPage ? 1 : 0 } }]
        }).start();
    }

    /**
       * This function will override the default behavior of the getFocused() method
       * 
       * @returns Return the child Component that this Component wishes to receive focus. Returning null 
       * or undefined tells the focus engine to not set focus on this Component at all.By default,
       * this Component's own instance is returned.
       */

    override _getFocused(): any {
        // focus selection for Top Navigation and The content rails
        if (this.isContentPage === true) {
            return this.tag('Background.ContentDetails.ContentActions' as any).children[this.index];
        }
        else {
            if (this.index >= 0) {
                return this.tag('Background.Slider.Wrapper' as any).children[this.index];
            }
            else {
                return this.tag('Navbar' as any);
            }
        }

    }

}